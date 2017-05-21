import { ActionReducer, Action } from '@ngrx/store';
import { State, initialState } from '../State/main-state';
import { INCREMENT, EVENT_FROM_EFFECT, } from "app/state-management/actions/main-action-creator";

export const mainStoreReducer: ActionReducer<State> = (state = initialState, action: Action) => {
    console.log(`Action came in! ${action.type}`);
    switch (action.type) {
        case INCREMENT: {
            console.log('Increment action being handled!');
            return {
                counter: state.counter + 1
            }
        }
        case EVENT_FROM_EFFECT: {
            console.log('we cheesin in the reducer over here!');
            return {
                counter: 4
            }
        }

        default:
            return state;
    }
}