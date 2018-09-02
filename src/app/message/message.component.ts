import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  message = '';
  number = 0;
  possibleMessages = [
   "It is certain.",
   "It is decidedly so.",
   "Without a doubt.",
   "Yes - definitely.",
   "You may rely on it.",
   "As I see it, yes.",
   "Most likely.",
   "Outlook good.",
   "Yes.",
   "Signs point to yes.",
   "Reply hazy, try again",
   "Ask again later.",
   "Better not tell you now.",
   "Cannot predict now.",
   "Concentrate and ask again.",
   "Don't count on it.",
   "My reply is no.",
   "My sources say no",
   "Outlook not so good.",
   "Very doubtful."
  ];
  constructor() { }

  ngOnInit() {
  }

  shakeUp(){
    this.number = this.getRandomInt(0, this.possibleMessages.length - 1);
    this.message = this.possibleMessages[this.number];
  }


    getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}
