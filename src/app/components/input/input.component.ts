import { InputVerifierService } from '../../services/input-verifier/input-verifier.service';
import { Subject } from 'rxjs/Rx';
import { OrchestratorService } from '../../services/orchestrator/orchestrator.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  options = {
    consoleLogging: true,
    DOMLogging: true,
    asyncCache: true,
    cacheStorage: true
  }
  verifyAlert = '';
  inputNumber;

  constructor(private orchestrator: OrchestratorService, private inputVerifier: InputVerifierService) {
  }

  ngOnInit() {
  }

  convertNumberToLCD(){
    const verify = this.inputVerifier.verifyInput(this.inputNumber);

    if( verify ===''){
      this.verifyAlert = '';
      const strInput = ''+ this.inputNumber;
      const inputArray = (strInput).split(',');
      this.orchestrator.convertNumbersToLCDScreen(parseInt(inputArray[0]), (inputArray[1]));
    }else{
      this.verifyAlert = verify;
    }
  }

  updateConsoleLogging(){
    this.orchestrator.updateConsoleLogging(this.options.consoleLogging);
  }
  updateDOMLogging(){
    this.orchestrator.updateDOMLogging(this.options.DOMLogging);
  }
  updateAsyncCache(){
    this.orchestrator.updateAsyncCache(this.options.asyncCache);
  }
  updateCacheStorage(){
    this.orchestrator.updateCacheStorage(this.options.cacheStorage);
  }



}
