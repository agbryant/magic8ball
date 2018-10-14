import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DisplayComponent } from './display/display.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: '', redirectTo: '/display', pathMatch: 'full' },
  { path: 'display', component: DisplayComponent },
  { path: 'edit', component: MessagesComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
