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
  uncertainMessages: Message[];

  constructor(private globals: Globals) { }

  getMessages(): Observable<Message[]> {

    console.log(this.globals.uncertain);
    if(this.globals.uncertain){
        return of(this.getUncertainList());
    }

    return of(this.messages);
  }

  getMessage(id: number): Observable<Message> {

    if(this.globals.uncertain){
      return of(this.getUncertainList().find(message => message.id === id));
    }
    return of(this.messages.find(message => message.id === id));
  }

  getUncertainList(){
    this.uncertainMessages = JSON.parse(JSON.stringify( this.messages ));
    this.uncertainMessages.forEach(this.makeUncertain);

    return this.uncertainMessages;
  }

  makeUncertain(element) {

    if(element.text[element.text.length - 1] == '.'){
      element.text = element.text.slice(0, -1) + '?';
    } else {
     element.text = element.text + '?';
    }

    return element;
  }
}
