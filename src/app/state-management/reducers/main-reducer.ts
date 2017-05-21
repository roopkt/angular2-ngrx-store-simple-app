import { ActionReducer, Action } from '@ngrx/store';
import { State, initialState } from '../State/main-state';
import { INCREMENT, EVENT_FROM_EFFECT,DECREMENT } from "app/state-management/actions/main-action-creator";

export const mainReducer: ActionReducer<State> = (state = initialState, action: Action) => {
    console.log(`Action came in! ${action.type}`);
    switch (action.type) {
        case INCREMENT: {
            console.log('Increment action being handled!');
               console.log(`${action.payload.innerObj.text}`);
            return {
                counter: state.counter + 1,
                displayText:state.displayText
            }
        }
         case DECREMENT: {
            console.log('Decrement action being handled!');
            return {
                counter: state.counter -1,
                displayText:state.displayText
            }
        }
        case EVENT_FROM_EFFECT: {
            console.log('we cheesin in the reducer over here!');
            return {
                counter: 4,
                displayText:''
            }
        }

        default:
            return state;
    }
}