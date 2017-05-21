import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { Observable } from "rxjs";

@Injectable()
export class MainEffects {
    constructor(private action$: Actions) { }

    @Effect() update$ = this.action$
        .ofType('SUPER_SIMPLE_EFFECT')
        .switchMap(() => {
            return Observable.of({ type: 'SUPER_SIMPLE_EFFECT_HAS_FINISHED' });
        });
}