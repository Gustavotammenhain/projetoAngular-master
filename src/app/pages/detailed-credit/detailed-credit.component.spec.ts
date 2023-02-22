import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedCreditComponent } from './detailed-credit.component';

describe('DetailedCreditComponent', () => {
  let component: DetailedCreditComponent;
  let fixture: ComponentFixture<DetailedCreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailedCreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
