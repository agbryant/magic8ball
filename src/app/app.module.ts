import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DisplayComponent } from './display/display.component';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './/app-routing.module';
import { MessageDetailComponent } from './message-detail/message-detail.component';
import { DisplayOptionComponent } from './display-option/display-option.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    MessagesComponent,
    MessageDetailComponent,
    DisplayOptionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
