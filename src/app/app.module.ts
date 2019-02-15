import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from "@angular/forms";
import { DictionaryComponent } from './dictionary/dictionary.component';
import {DictionaryService} from "./dictionary.service";


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DictionaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
