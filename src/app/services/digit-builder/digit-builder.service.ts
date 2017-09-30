import { Injectable } from '@angular/core';

@Injectable()
export class DigitBuilderService {

  matrix: Number[][];
  numbers_matrix: NumberMatrix
  enable_async_

  // Se usa para para tener en cache numeros con diferente longitud segmento en caso de que se necesiten
  cache_numbers_matrix: NumberMatrix[];

  constructor() {
    console.log('Ready for digit building!');
   }

  init() {
  }

}

export interface NumberMatrix {
  current_segment_length: Number,
  matrix: Number[]
}
