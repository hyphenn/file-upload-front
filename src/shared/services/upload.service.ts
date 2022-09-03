import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FileUpload} from "../models/file-upload";
import {Observable} from "rxjs";

@Injectable()
export class UploadService {
    url: string = "http://localhost:8080/api/upload"

    constructor(private http: HttpClient) {
        console.log("created service", http);
    }

    public upload(file: FileUpload): void {
        console.log("UPLOADING:", file);
        this.http.post<void>(this.url, file).subscribe(value => {
            console.log("FILE WAS SENT");
        });
    }
}
