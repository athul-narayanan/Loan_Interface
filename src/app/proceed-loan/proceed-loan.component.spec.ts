import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceedLoanComponent } from './proceed-loan.component';

describe('ProceedLoanComponent', () => {
  let component: ProceedLoanComponent;
  let fixture: ComponentFixture<ProceedLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProceedLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceedLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
