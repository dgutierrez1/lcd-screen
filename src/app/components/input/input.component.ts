import { CentralControllerService } from '../../services/central-controller/central-controller.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor(private CentralControllerService: CentralControllerService) { }

  ngOnInit() {
  }

}
