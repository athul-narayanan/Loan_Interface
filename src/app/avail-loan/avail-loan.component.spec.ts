import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailLoanComponent } from './avail-loan.component';

describe('AvailLoanComponent', () => {
  let component: AvailLoanComponent;
  let fixture: ComponentFixture<AvailLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
