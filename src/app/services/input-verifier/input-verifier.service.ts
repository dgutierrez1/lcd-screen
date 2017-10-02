import { Injectable } from '@angular/core';

@Injectable()
export class InputVerifierService {

  constructor() { }

  verifyInput(input: string){
    const inputArray = input.split(',');
    if (inputArray.length !== 2 ){
      return 'La entrada no cumple formato requerido. Recuerde debe contener 2 números separados por coma, el primer número representa el tamaño de la impresión. El segundo número es el número a mostrar en la pantalla';
    }else if (!Number.isInteger(parseInt(inputArray[0])) || !Number.isInteger(parseInt(inputArray[1])) || parseInt(inputArray[0])<1 || parseInt(inputArray[1])<0) {
      return 'La entrada debe contener 2 números separados por coma, el primer número representa el tamaño de la impresión. El segundo número es el número a mostrar en la pantalla'
    }
    return '';
  }
}
