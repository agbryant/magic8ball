import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { DEFAULT_MESSAGES } from '../util/default-messages';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages = DEFAULT_MESSAGES
  selectedMessage: Message

  constructor() { }

  ngOnInit() {
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

}
