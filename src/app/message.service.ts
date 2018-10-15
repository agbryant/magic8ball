import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Message } from './message';
import { DEFAULT_MESSAGES } from './util/default-messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages(): Observable<Message[]> {
    return of(DEFAULT_MESSAGES);
  }

  getMessage(id: number): Observable<Message> {
    return of(DEFAULT_MESSAGES.find(message => message.id === id));
  }
}
