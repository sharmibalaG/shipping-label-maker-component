import { Component, OnInit , ContentChildren , QueryList, ContentChild, Input} from '@angular/core';
import { WizardInnerStepComponent} from './wizard-inner-step.component';
import { WizardHeaderStepComponent } from './wizard-inner-step.component';

@Component({
  selector: 'wizard-steps',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardStepComponent implements OnInit {

@ContentChild(WizardHeaderStepComponent) header:any;
@ContentChildren(WizardInnerStepComponent) componets : QueryList<WizardInnerStepComponent>;
@Input() wizardContext: object;

  constructor() { }

  ngOnInit() {
     
  }
  ngAfterContentInit() {
      this.componets.forEach(tab => 
        {});
    
  }

}
