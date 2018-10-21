import { Pipe, PipeTransform } from '@angular/core';

import { Message } from './message';
import { Globals } from './globals';

@Pipe({
  name: 'question'
})
export class QuestionPipe implements PipeTransform {

    constructor(private globals: Globals) { }

    transform(value: any): string|null {

        if (typeof value === 'undefined' || value.length == 0){
            return null;
        }

        if(!this.globals.uncertain){
            return value;
        }

        try {

            let uncertainValue = value;

            if(uncertainValue[uncertainValue.length - 1] == '.'){
                uncertainValue = uncertainValue.slice(0, -1) + '?';
            } else if (uncertainValue[uncertainValue.length - 1] == '?'){
                uncertainValue += '!';
            } else {
                uncertainValue += '?';
            }

            return uncertainValue;

        } catch (error) {
            console.log(error.message);
        }
    }
}
