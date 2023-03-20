import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadFilesComponent } from './upload.files/upload.files.component';
import { UploadFilesModule } from './upload.files/upload.files.module';
import { CompTemplateComponent } from './comp.template/comp.template.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadFilesComponent,
    CompTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
