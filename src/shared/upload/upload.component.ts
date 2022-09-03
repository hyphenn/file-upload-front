import {Component, OnInit} from '@angular/core';
import {FileUpload} from "../models/file-upload";
import {UploadService} from "../services/upload.service";
import {fromPromise} from "rxjs/internal/observable/innerFrom";
import {map, tap} from "rxjs";

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html',
    styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
    file: File;

    constructor(private uploadService: UploadService) {
        console.log("created component", uploadService);

    }

    ngOnInit(): void {
    }

    public upload(): void {
        fromPromise(this.file.arrayBuffer()).pipe(map(buffer => {
            const fileUpload: FileUpload = new FileUpload();
            fileUpload.name = "testFile.png"
            fileUpload.file = btoa(
                new Uint8Array(buffer)
                    .reduce((data, byte) => data + String.fromCharCode(byte), '')
            );
            return fileUpload
        }), tap(value => this.uploadService.upload(value))).subscribe(value => {
            console.log("SENT");
        });
    }

    public onFileChange(event: any): void {
        if (!event.target.files) {
            return;
        }
        this.file = event.target.files[0]
    }
}
