import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { addDataAction } from 'src/app/shared/store/data.actions';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css'],
})
export class DataFormComponent {
  constructor(private store: Store<{ initData: { initData: String } }>) {}

  onAdd() {
    this.store.dispatch(addDataAction({ newData: 'Add sponsor details' }));

    console.log("Is this even working!!!");
    
  }
}
