import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedDebitComponent } from './detailed-debit.component';

describe('DetailedDebitComponent', () => {
  let component: DetailedDebitComponent;
  let fixture: ComponentFixture<DetailedDebitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedDebitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedDebitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
