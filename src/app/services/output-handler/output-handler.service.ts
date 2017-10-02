import { forEach } from '@angular/router/src/utils/collection';
import { NumberMatrix } from '../digit-builder/classes';
import { Injectable } from '@angular/core';

@Injectable()
export class OutputHandlerService {
  
  constructor() { }

  printOnConsole(number: string, digitMatrix: NumberMatrix): string {

    const outputString = this.formatToString(number,digitMatrix);

    console.log(outputString);
    return outputString;

  }
  formatToString(number: string, digitMatrix: NumberMatrix): string {
    
        const numberArray: number[] = number.split('').map((t) => {return parseInt(t)});
        const outputMatrix = [];
    
        let outputString = '';
    
        const height: number = (2 * digitMatrix.segmentLength) + 3;
    
        for (let x = 0; x < height; x ++) {
    
          for (let i = 0; i < numberArray.length; i ++) {
    
            const digit = digitMatrix.digitContainersArray[numberArray[i]].matrix;
    
            for (let j = 0; j < digit[x].length; j ++) {
              outputString += digit[x][j];
            }
            outputString += ' ';
          }
          outputString += '\n';
        }
        return outputString;
      }
}
