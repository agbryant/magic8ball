import { Component, OnInit } from '@angular/core';

import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];
  selectedMessage: Message;

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.getMessages();
  }

  onSelect(message: Message): void {
    this.selectedMessage = message;
  }

  getMessages(): void {
    this.messageService.getMessages()
                       .subscribe( messages => this.messages = messages );
  }

}
