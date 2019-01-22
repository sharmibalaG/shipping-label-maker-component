import { Component, OnInit, ContentChildren, QueryList, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl , Validators, FormBuilder } from '@angular/forms';


import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { CreateContext } from '../shared/actions/wizard.action';
import { PrevContext } from './actions/wizard.action'

import { WizardContext } from './modals/wizard.modal';
import { Observable } from 'rxjs';

const shippingRate = 0.40;


@Component({
    selector: 'wizard-header',
    template: ``,
    styleUrls: ['./wizard.component.css']
})
export class WizardHeaderStepComponent {
    @Input() title: number; 
    constructor() {}  
}


@Component({
    selector: 'wizard-step-one',
    templateUrl: './wizard-inner-step.component.html',
    styleUrls: ['./wizard.component.css']
})

export class WizardInnerStepComponent implements OnInit {
    @Input() title: number;

    WizardContext: Observable<WizardContext[]>;
    resultItem: any;
    shippingObject: any;
    shippingCost: number;
    valid : true;
    completedItem : any;
    @Output() Complete: EventEmitter<number> = new EventEmitter();

    senderForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        streetName: new FormControl('',[Validators.required]),
        cityName: new FormControl('',[Validators.required]),
        stateName: new FormControl('',[Validators.required]),
        ziptName: new FormControl('',[Validators.required])
    });

    reciverForm = new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        streetName: new FormControl('',[Validators.required]),
        cityName: new FormControl('',[Validators.required]),
        stateName: new FormControl('',[Validators.required]),
        ziptName: new FormControl('',[Validators.required])
    });

    weightForm = new FormGroup({
        weightName: new FormControl('',[Validators.required])
    });

    shippingForm = new FormGroup({
        shippingName: new FormControl('',[Validators.required])
    })

    constructor(private store: Store<AppState>, private formBuilder: FormBuilder) { }

    ngOnInit() {
    }
    
onNext(senderForm, reciverForm, weightForm, shippingForm) {
        if (this.title < 5) {
            this.title++;
        }
        if(this.title == 2) {
            if(this.reciverForm.valid) {

            }
        }
       
    this.store.dispatch(new CreateContext(
            {
                from: {
                    name: senderForm.value.firstName,
                    street: senderForm.value.streetName,
                    city: senderForm.value.cityName,
                    state: senderForm.value.stateName,
                    zip: senderForm.value.ziptName,
                },
                to: {
                    name: reciverForm.value.firstName,
                    street: reciverForm.value.streetName,
                    city: reciverForm.value.cityName,
                    state: reciverForm.value.stateName,
                    zip: reciverForm.value.ziptName,
                },
                weight: weightForm.value.weightName,
                shippingOption: shippingForm.value.shippingName
            }
        ));
        this.WizardContext = this.store.select('WizardContext');

        this.WizardContext.subscribe(item => {
            this.resultItem = item;
        })
       
        if (this.resultItem.length == 4) {
            this.shippingObject = this.resultItem[3];
            if(this.shippingObject.weight != undefined) {                             
            this.shippingCost = (this.shippingObject.weight) * shippingRate * ((this.shippingObject.shippingOption === "Ground") ? 1 : 1.5);
            
            }
            return this.shippingObject;
        }
       
    }

    onPrev() {
        if (this.title > 2) {
            this.title--;

        }
        else {
            this.title = 1;

        }                
           
    }
    confirm() { 
        this.WizardContext.subscribe(item => {
            this.completedItem = item;
        })        
        this.Complete.emit( this.completedItem[this.completedItem.length]);     
    }
}