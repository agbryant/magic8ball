import { Component, OnInit } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

import { Message } from '../message';
import { MessageService } from '../message.service';
import { Globals } from '../globals';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  outercircle = 'circle';
  innercircle = 'inner-circle-other-side';
  otherside = 'other-side';
  triangle = 'hidden';
  message = '';
  number = 0;
  possibleMessages: Message[];
  uncertain: boolean = false;

  constructor(
    private messageService: MessageService,
    private globals: Globals) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessage(){

    if( this.globals.uncertain != this.uncertain ){
        this.getMessages();
        this.uncertain = !this.uncertain;
    }

    let messageList = this.possibleMessages;

    if(this.globals.weighted){

        this.message = this.getRandomMessage(messageList).toUpperCase();

    } else {

        this.number = this.getRandomInt(0, messageList.length - 1);
        this.message = messageList[this.number].text.toUpperCase();
    }
  }

  getRandomMessage(list) {

      const random_num = this.getRandomFloat(0, 1);
      let weight_sum: number = 0;
      // console.log("RANDOM " + random_num)
      const weightTotal = list.reduce((prev, cur) => prev + cur.weight, 0);

      for (var i = 0; i < list.length; i++) {
          weight_sum += list[i].weight / weightTotal;
          weight_sum = +weight_sum.toFixed(2);

          // console.log(list[i].text + " WEIGHT SUM STATUS " + weight_sum);

          if (random_num <= weight_sum) {
              return list[i].text;
          }
      }
  };

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  shakeUp($event){

    if($event.type == 'mouseover'){
        this.outercircle = 'circle hovering';
        this.triangle = 'hidden';
        this.innercircle = 'inner-circle-other-side';
        this.otherside = 'other-side';
    }

    if($event.type == 'mouseleave'){
        this.getMessage();
        this.outercircle = 'circle';
        this.triangle = 'triangle';
        this.innercircle = 'inner-circle';
        this.otherside = 'hidden';
    }
  }

  getMessages(): void {
    this.messageService.getMessages()
                     .subscribe( messages => this.possibleMessages = messages );
  }

}
