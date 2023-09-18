import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataFormDisplayComponent } from './data-form-display.component';

describe('DataFormDisplayComponent', () => {
  let component: DataFormDisplayComponent;
  let fixture: ComponentFixture<DataFormDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataFormDisplayComponent]
    });
    fixture = TestBed.createComponent(DataFormDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
