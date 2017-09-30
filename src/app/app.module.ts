import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AlertModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { OutputComponent } from './components/output/output.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import { InputVerifierService } from './services/input-verifier/input-verifier.service';
import { CentralControllerService } from './services/central-controller/central-controller.service';
import { DigitBuilderService } from './services/digit-builder/digit-builder.service';
import { PrintService } from './services/print/print.service';


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
    AlertModule.forRoot()
  ],
  providers: [
    InputVerifierService,
    CentralControllerService,
    DigitBuilderService,
    PrintService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
