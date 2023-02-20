import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialSummaryComponent } from './financial-summary.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';

describe('FinancialSummaryComponent', () => {
  let component: FinancialSummaryComponent;
  let fixture: ComponentFixture<FinancialSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinancialSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    MatProgressBarModule;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
