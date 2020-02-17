import { Component, OnInit } from '@angular/core';

import { Globals } from '../globals';

@Component({
  selector: 'app-display-option',
  templateUrl: './display-option.component.html',
  styleUrls: ['./display-option.component.css']
})
export class DisplayOptionComponent implements OnInit {

  constructor( public globals: Globals ) { }

  ngOnInit() {
  }


  toggleWeight(){
    this.globals.weighted = !this.globals.weighted;
  }

  toggleUncertain(){
    this.globals.uncertain = !this.globals.uncertain;
  }
}
