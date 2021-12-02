import { Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducers';
import * as actions from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styles: [
  ]
})

export class HijoComponent implements OnInit {

  contador : number = 0;

  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('contador').subscribe( contador => this.contador = contador);
  }

  multiply(){
    this.store.dispatch(actions.multiply({number:2}));
  }

  divide(){
    this.store.dispatch(actions.divide({number:2}));
  }
}
