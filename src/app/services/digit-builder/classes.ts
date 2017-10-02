
export class NumberMatrix {
    segmentLength: number;
    digitContainersArray: DigitSegmentsContainer[];

    constructor() {
        this.digitContainersArray = [];
        this.segmentLength = -1;
    }
  }

  export class DigitSegmentsContainer {
    number: Number;
    matrix: string[][];
}