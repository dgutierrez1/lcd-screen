import { DigitBuilderService } from '../digit-builder/digit-builder.service';
import { Injectable } from '@angular/core';

@Injectable()
export class CentralControllerService {

  constructor(private DigitBuilderService: DigitBuilderService) {
    console.log('Central controller up & running');
   }

}
