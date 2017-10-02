import { NumberMatrix, DigitSegmentsContainer } from './classes';

export class NumberMatrixCacheManager {
    // Se usa una matrix auxiliar con los indices para hacer la busqueda de las matrices mas inmediata
    matricesCacheArray: NumberMatrix[];
    indexArray: Number[];

    constructor() {
      this.matricesCacheArray = [];
      this.indexArray = [];
    }
    saveMatrixOnCache(matrix: NumberMatrix) {
      this.matricesCacheArray.push(matrix);
      this.indexArray.push(matrix.segmentLength);
    }

    getMatrixFromCache(matrixSegmentLength: Number): NumberMatrix {
      const index = this.indexArray.indexOf(matrixSegmentLength);
      return this.matricesCacheArray[index];
    }
  }
