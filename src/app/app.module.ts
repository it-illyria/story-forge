import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/moment";
import {RouterOutlet} from "@angular/router";
import {CoreModule} from "@core/core.module";
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  imports: [HttpClientModule, CommonModule, RouterOutlet, CoreModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
  ],
  providers: [
    HttpClientModule, HttpClient
  ],
  exports: [],
})
export class AppModule { }
