import { Component, OnInit } from '@angular/core';

import { DEFAULT_MESSAGES } from '../util/default-messages';

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
  weighted: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getMessage(){

    let messageList = this.possibleMessages;

    if(this.weighted){

        this.message = this.getRandomMessage(messageList);

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

  toggleWeight(){
    this.weighted = !this.weighted;
  }

}
