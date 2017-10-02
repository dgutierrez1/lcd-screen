import { flagDaysCalendar } from 'ngx-bootstrap/datepicker/engine/flag-days-calendar';
import { NumberMatrix, DigitSegmentsContainer } from './classes';


export class DigitBuilder {
    digitTemplateArray;
  
    verticalSymbol: string;
    horizontalSymbol: string;
    blank: string;
  
    constructor() {
      this.verticalSymbol = '|';
      this.horizontalSymbol = '-';
      this.blank = ' ';
  
      this.digitTemplateArray = [
        { template: [1, 1, 1, 1 , 2, 0, 2] },
        { template: [0, 1, 0, 1 , 0, 0, 0] },
        { template: [0, 1, 1, 0 , 2, 2, 2] },
        { template: [0, 1, 0, 1 , 2, 2, 2] },
        { template: [1, 1, 0, 1 , 0, 2, 0] },
        { template: [1, 0, 0, 1 , 2, 2, 2] },
        { template: [1, 0, 1, 1 , 2, 2, 2] },
        { template: [0, 1, 0, 1 , 2, 0, 0] },
        { template: [1, 1, 1, 1 , 2, 2, 2] },
        { template: [1, 1, 0, 1 , 2, 2, 2] }
      ];
    }
  
    createNumberMatrix(segmentLength: number): NumberMatrix {
      const digitsArray = new NumberMatrix();
  
      for (let i = 0 ; i < 10; i++) {
        
        const matrix: string[][] = [];
  
        const columnsCount: number = segmentLength + 2;
        const rowsCount: number = (segmentLength * 2) + 3;
  
        const matrixLength: number = columnsCount * rowsCount;
  
        const array = this.digitTemplateArray[i];
  
        let tmpFlatMatrix: string[] = Array(matrixLength);
        tmpFlatMatrix.fill(' ', 0, matrixLength);

        let flatMatrixIndex = columnsCount;
        for (let j = 0 ; j < 2; j++) {

            if (array.template[j] === 1) {
                tmpFlatMatrix = this.addVerticalSegment(tmpFlatMatrix, segmentLength, flatMatrixIndex, columnsCount);
            }
            flatMatrixIndex += segmentLength + 1;
        }

        flatMatrixIndex = (columnsCount * columnsCount);
        for (let j = 2 ; j < 4; j++) {

            if (array.template[j] === 1) {
                tmpFlatMatrix = this.addVerticalSegment(tmpFlatMatrix, segmentLength, flatMatrixIndex, columnsCount);
            }
            flatMatrixIndex += segmentLength + 1;
        }

        flatMatrixIndex = 0;
        for (let j = 4 ; j < 7 ; j++) {
            if (array.template[j] === 2) {
                tmpFlatMatrix = this.addHorizontalSegment(tmpFlatMatrix, segmentLength, flatMatrixIndex);
            }
            flatMatrixIndex += ((columnsCount - 1) * columnsCount);
        }


        // Se convierta la flatMatrixIndex a una matriz bidimensional
        flatMatrixIndex = 0;
        for (let j = 0 ; j < rowsCount; j++) {
            matrix[j] = [];
            for (let h = 0 ; h < columnsCount; h++) {
                matrix[j][h] = tmpFlatMatrix[flatMatrixIndex];
                flatMatrixIndex++;
            }
        }

        const digitContainer = new DigitSegmentsContainer();
        digitContainer.matrix = matrix;
        digitContainer.number = i;
        digitsArray.digitContainersArray.push(digitContainer);
      }
      digitsArray.segmentLength = segmentLength;
      return digitsArray;
    }

    addHorizontalSegment( matrix, segmentLength: number, flatMatrixIndex: number) {
    //   matrix[flatMatrixIndex] = ' ';
    flatMatrixIndex++;
      for (let i = 0; i < segmentLength; i++) {
          matrix[flatMatrixIndex] = this.horizontalSymbol;
          flatMatrixIndex++;
      }
    //   matrix[flatMatrixIndex] = ' ';
      return matrix;
    }
    addVerticalSegment(matrix, segmentLength: number, flatMatrixIndex: number, columnsCount: number) {
      for (let i = 0; i < segmentLength; i++) {
          matrix[flatMatrixIndex] = this.verticalSymbol;
          flatMatrixIndex += columnsCount;
      }
      return matrix;
    }
  }
  
  