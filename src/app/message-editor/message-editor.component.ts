import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { DEFAULT_MESSAGES } from '../default-messages';

@Component({
  selector: 'app-message-editor',
  templateUrl: './message-editor.component.html',
  styleUrls: ['./message-editor.component.css']
})
export class MessageEditorComponent implements OnInit {

  messages = DEFAULT_MESSAGES
  selectedMessage: Message

  constructor() { }

  ngOnInit() {
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

}
