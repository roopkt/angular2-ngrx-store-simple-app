import { TestBed, async, inject } from "@angular/core/testing";
import { StoreModule, Store, provideStore } from "@ngrx/store";
import { mainReducer } from "app/state-management/reducers/main-reducer";
import { State } from "app/state-management/State/main-state";
import { INCREMENT } from "app/state-management/actions/main-action-creator";

describe('Reducer', () => {
    let store;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                StoreModule.provideStore({ mainReducer })
            ],
            declarations: []
        }).compileComponents();
    }));

    it('should have store injected', inject([Store], (store: Store<State>) => {
        expect(store).toBeTruthy();
    }));

    it('should have the initial counter be 10', inject([Store], (store: Store<State>) => {
        store.select('mainReducer').subscribe((data: State) => {
            expect(data.counter).toEqual(10);
        });
    }));
    it('should have the counter be 11 after handling the INCREMENT action', inject([Store],(store:Store<State>)=>{
        store.dispatch({type:INCREMENT, payload:{innerObj:{text:'drep!'}}});
        store.select('mainReducer').subscribe((data: State) => {
            expect(data.counter).toEqual(11);
        });
    }));
});