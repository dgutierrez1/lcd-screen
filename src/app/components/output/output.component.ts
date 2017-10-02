import { Component, OnInit } from '@angular/core';
import { OrchestratorService } from '../../services/orchestrator/orchestrator.service';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.scss']
})
export class OutputComponent implements OnInit {

  outputHistory: string[];

  constructor(private orchestrator: OrchestratorService) {
    this.outputHistory = [];
   }

  ngOnInit() {
    this.orchestrator.getOutputSubject().subscribe((lastOutput => {

      // const outputSplit = lastOutput.split('\n');
      // outputSplit.forEach((line) => {
      //   this.outputHistory.push(line)
      // })
      this.outputHistory.push(lastOutput);
      //console.log(lastOutput)
    }))
  }

}
