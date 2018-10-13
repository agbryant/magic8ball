import { Component, OnInit } from '@angular/core';

import { DEFAULT_MESSAGES } from '../default-messages';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

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
  possibleMessages = DEFAULT_MESSAGES;
  constructor() { }

  ngOnInit() {
  }

  getMessage(){
    this.number = this.getRandomInt(0, this.possibleMessages.length - 1);
    this.message = this.possibleMessages[this.number].text.toUpperCase();
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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

}
