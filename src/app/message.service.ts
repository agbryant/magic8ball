import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Message } from './message';
import { DEFAULT_MESSAGES } from './util/default-messages';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages = DEFAULT_MESSAGES;

  constructor(private globals: Globals) { }

  getMessages(): Observable<Message[]> {
    return of(this.messages);
  }

  getMessage(id: number): Observable<Message> {
    return of(this.messages.find(message => message.id === id));
  }
}
