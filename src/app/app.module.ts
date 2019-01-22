import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { reducer } from '../app/shared/reducers/wizard.reducer';

import { AppComponent } from './app.component';
import { WizardComponent } from './shared/wizard.component';
import { WizardStepComponent } from './shared/wizard-step.component';
import { WizardInnerStepComponent } from './shared/wizard-inner-step.component';
import { WizardHeaderStepComponent } from './shared/wizard-inner-step.component';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponent,
    WizardStepComponent,
    WizardInnerStepComponent,
    WizardHeaderStepComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      WizardContext: reducer
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
