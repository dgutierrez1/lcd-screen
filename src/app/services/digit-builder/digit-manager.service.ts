import { CurrencyPipe } from '@angular/common/src/pipes/number_pipe';
import { Injectable } from '@angular/core';
import { NumberMatrix, DigitSegmentsContainer } from './classes';
import { NumberMatrixCacheManager } from './matrix-cache-manager';
import { DigitBuilder } from './digit-builder';


@Injectable()
export class DigitManagerService {

  // currentNumbersMatrix: NumberMatrix;
  enableAsyncMatrixCreation: boolean;

  constructor(
    private builder: DigitBuilder,
    private cacheManager: NumberMatrixCacheManager
  ) {
    console.log('Ready for digit building!');
    // this.currentNumbersMatrix = new NumberMatrix();
   }

   resolveDigitMatrix( segmentLength: number, cacheStorageEnabled: boolean ): NumberMatrix {

    const cacheMatrix = this.cacheManager.getMatrixFromCache(segmentLength);

     if (cacheMatrix) {
        console.log('Base matrix with segment length ' +segmentLength+ ' got from cache' );
        return cacheMatrix;
     }else {
        const newMatrix = this.builder.createNumberMatrix(segmentLength);
        if (cacheStorageEnabled){
          this.cacheManager.saveMatrixOnCache(newMatrix);
        }
        console.log('Base matrix with segment ' +segmentLength+' length created' );
        return newMatrix;
     }
   }
}
