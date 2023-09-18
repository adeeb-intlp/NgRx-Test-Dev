import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { initData } from 'src/app/shared/store/data.state';

@Component({
  selector: 'app-data-form-display',
  templateUrl: './data-form-display.component.html',
  styleUrls: ['./data-form-display.component.css'],
})
export class DataFormDisplayComponent implements OnInit {
  constructor(private store: Store<{ initData: { initData: String } }>) {}

  dataDisplay!: String;

  ngOnInit(): void {
    this.store.select('initData').subscribe((data) => {
      this.dataDisplay = data.initData;
      console.log(data);
      
    });
  }
}
