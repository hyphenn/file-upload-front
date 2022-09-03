import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UploadComponent} from './upload/upload.component';
import {HttpClientModule} from '@angular/common/http';
import {UploadService} from "./services/upload.service";


@NgModule({
    declarations: [
        UploadComponent
    ],
    exports: [
        UploadComponent
    ],
    imports: [
        HttpClientModule,
        CommonModule
    ],
    providers: [
        UploadService
    ]

})
export class SharedModule {
}
