import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyDebitComponent } from './buy-debit.component';

describe('BuyDebitComponent', () => {
  let component: BuyDebitComponent;
  let fixture: ComponentFixture<BuyDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuyDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
