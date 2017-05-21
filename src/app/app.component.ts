import { Component } from '@angular/core';
import { Store } from "@ngrx/store";
import { State } from "app/state-management/State/main-state";
import { INCREMENT, DECREMENT } from "app/state-management/actions/main-action-creator";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  data = '';
  displayText = '';
  constructor(private store: Store<State>) {
    
    console.log(`we have a store! ${store}`);

    store.select('mainReducer')
      .subscribe((data: State) => {
        this.data = `data is ${data.counter}`;
        this.displayText = data.displayText;
        console.log(`component sees data is: ${data.counter} and ${data.displayText}`);
      });

  }

  increment() {
   this.store.dispatch({type:INCREMENT,payload:{innerObj:{text:'drep!'}}});
  }
   decrement() {
   this.store.dispatch({type:DECREMENT,payload:{innerObj:{text:'drep!'}}});
  }

  superSimpleEffect() {
      this.store.dispatch({type:'SUPER_SIMPLE_EFFECT',payload:{seconds:2}});
  }

}
