import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app/app.reducers';
import * as actions from './contador/contador.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contador!:number;

  constructor(private store:Store<AppState>){
    this.store.select('contador').subscribe(contador => this.contador = contador)
  }

  increment(){
    this.store.dispatch(actions.increment());
  }

  decrement(){
    this.store.dispatch(actions.decrement());
  }
}
