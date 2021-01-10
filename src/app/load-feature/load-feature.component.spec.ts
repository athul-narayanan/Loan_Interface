import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadFeatureComponent } from './load-feature.component';

describe('LoadFeatureComponent', () => {
  let component: LoadFeatureComponent;
  let fixture: ComponentFixture<LoadFeatureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadFeatureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
