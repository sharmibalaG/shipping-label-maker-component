import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store'
import { WizardContext } from '../modals/wizard.modal';

export const CREATE_CONTEXT = 'Create_Context';
export const PREV_CONTEXT = 'Prev_Context';


export class CreateContext implements Action {
    readonly type = CREATE_CONTEXT;

    constructor(public payload: WizardContext) { }
}

export class PrevContext implements Action {
    readonly type = PREV_CONTEXT;

    constructor() { }
}

export type Actions = CreateContext | PrevContext;
