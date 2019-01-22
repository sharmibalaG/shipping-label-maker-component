import { Component, OnInit, ContentChildren, QueryList } from '@angular/core';
import { WizardInnerStepComponent } from './wizard-inner-step.component';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

  

  title: number = 1;
  wizardContextComplete;
  wizardContext = {
    from: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    to: {
      name: "",
      street: "",
      city: "",
      state: "",
      zip: ""
    },
    weight: 2,
    shippingOption: 1
  }

  constructor() {}

  ngOnInit() {}
  
  }
