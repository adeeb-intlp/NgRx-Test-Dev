import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { dataReducer } from './shared/store/data.reducer';
import { DataFormComponent } from './component/data-form/data-form.component';
import { DataFormDisplayComponent } from './component/data-form-display/data-form-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    DataFormDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({initData:dataReducer}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
