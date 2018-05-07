import {  HttpClient, HttpClientModule } from '@angular/common/http';
import { Inject, Input, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { ViewChild } from '@angular/core/src/metadata/di';
import { FormsModule, Validator } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MAT_DIALOG_DATA, MAT_DIALOG_DEFAULT_OPTIONS, MatProgressBarModule, MatSortModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AppConfig } from './config/app.config';
import { config } from './config/config.jwt';
import { CoreModule } from './core/core.module';
import { TransferJobAdsService } from './core/transfer-data/transfer-data.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot() ,
    HttpModule,
    HttpClientModule,
    NgbModule.forRoot(),
    ToastrModule.forRoot(),
    NoopAnimationsModule,
    MDBBootstrapModule.forRoot(),
    JwtModule.forRoot({
      config,
    }),
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AppConfig, {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
              TransferJobAdsService,
  ],
  bootstrap: [AppComponent],
  exports: [
    JwtModule,
  ],
})
export class AppModule { }
