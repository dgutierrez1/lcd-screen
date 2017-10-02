import { NumberMatrixCacheManager } from './services/digit-builder/matrix-cache-manager';
import { DigitBuilder } from './services/digit-builder/digit-builder';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AlertModule, AccordionModule, ButtonsModule  } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { InputVerifierService } from './services/input-verifier/input-verifier.service';
import { OrchestratorService } from './services/orchestrator/orchestrator.service';
import { DigitManagerService } from './services/digit-builder/digit-manager.service';
import { OutputHandlerService } from './services/output-handler/output-handler.service';


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    OutputComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AccordionModule.forRoot(),
    ButtonsModule.forRoot()
  ],
  providers: [
    InputVerifierService,
    OrchestratorService,
    DigitManagerService,
    OutputHandlerService,
    DigitBuilder,
    NumberMatrixCacheManager,
    OutputHandlerService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
