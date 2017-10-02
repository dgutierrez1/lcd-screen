// import { setTimeout } from 'timers';
import { Subject } from 'rxjs/Rx';
import { OutputHandlerService } from '../output-handler/output-handler.service';
import { NumberMatrix } from '../digit-builder/classes';
import { DigitManagerService } from '../digit-builder/digit-manager.service';
import { Injectable, OnInit } from '@angular/core';

@Injectable()
export class OrchestratorService {

  globalVariables = {
    currentNumbersMatrix: new NumberMatrix(),
    previousOutput: [],
    enableConsoleLogging: true,
    enableDOMLogging: true,
    enableAsyncCache: true,
    enableCacheStorage: true
  }

  outputSubject: Subject<string>;


  constructor(
    private digitManager: DigitManagerService,
    private outputHandler: OutputHandlerService
  ) {
    console.log('Orchestrator up & running');
    this.outputSubject = new Subject();

    if(this.globalVariables.enableAsyncCache){
      this.asyncCache();
    }
  }

  convertNumbersToLCDScreen( segmentLength: number, inputToConvert: string) {
    if (this.globalVariables.currentNumbersMatrix.segmentLength !== segmentLength) {
      this.globalVariables.currentNumbersMatrix = this.digitManager.resolveDigitMatrix(
        segmentLength,
        this.globalVariables. enableCacheStorage);
    }
    if(this.globalVariables.enableConsoleLogging){
      const output = this.outputHandler.printOnConsole(
        inputToConvert,
        this.globalVariables.currentNumbersMatrix
      );
    }
    if(this.globalVariables.enableDOMLogging){
      const output = this.outputHandler.formatToString(inputToConvert, this.globalVariables.currentNumbersMatrix);
      this.globalVariables.previousOutput.push(output);
      this.outputSubject.next(output);
    }
  }

  async asyncCache(){
    for(let i = 1; i < 100; i++){
      this.digitManager.resolveDigitMatrix(i, true);
    }
  }
  getOutputSubject(): Subject<string> {
    return this.outputSubject;
  }
  
  updateConsoleLogging(value: boolean){
    this.globalVariables.enableConsoleLogging = value;
    console.log(this.globalVariables);
  }
  updateDOMLogging(value: boolean){
    this.globalVariables.enableDOMLogging = value;
    console.log(this.globalVariables);
    
  }
  updateAsyncCache(value: boolean){
    this.globalVariables.enableAsyncCache = value;
    console.log(this.globalVariables);
    
  }
  updateCacheStorage(value: boolean){
    this.globalVariables.enableCacheStorage = value;
    console.log(this.globalVariables);
  }



}
