import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from "@ngrx/store";
import {EffectsModule} from '@ngrx/effects';
import { mainReducer } from './state-management/reducers/main-reducer';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore({ mainReducer }),
    EffectsModule.run(MainEffects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
