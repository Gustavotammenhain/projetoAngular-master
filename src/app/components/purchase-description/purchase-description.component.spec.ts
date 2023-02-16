import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseDescriptionComponent } from './purchase-description.component';
import {MatIconModule} from '@angular/material/icon'

describe('PurchaseDescriptionComponent', () => {
  let component: PurchaseDescriptionComponent;
  let fixture: ComponentFixture<PurchaseDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    MatIconModule
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
