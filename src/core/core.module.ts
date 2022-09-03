import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app/app.component';
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {UploadService} from "../shared/services/upload.service";
import {SharedModule} from "../shared/shared.module";


const routes: Routes = []; // sets up routes constant where you define your routes

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes),
        SharedModule,
    ],
    bootstrap: [AppComponent],
    providers: [UploadService]
})


export class CoreModule {
}
