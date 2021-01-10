import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfCirclDottedComponent } from './half-circl-dotted.component';

describe('HalfCirclDottedComponent', () => {
  let component: HalfCirclDottedComponent;
  let fixture: ComponentFixture<HalfCirclDottedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HalfCirclDottedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HalfCirclDottedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
