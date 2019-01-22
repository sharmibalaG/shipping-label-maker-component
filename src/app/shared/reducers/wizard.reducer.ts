import { WizardContext } from '../modals/wizard.modal';
import { Actions, CREATE_CONTEXT, PREV_CONTEXT } from '../actions/wizard.action';



export function reducer(
    state: WizardContext[] = [],
    action: Actions) {
      
    switch (action.type) {
        case CREATE_CONTEXT:
            return [...state, action.payload];   

        case PREV_CONTEXT:
      
            return [...state];

        default:
            return state;
    }
}
