import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorButtonGroupPMComponent } from './hor-button-group-pm.component';

describe('HorButtonGroupPMComponent', () => {
  let component: HorButtonGroupPMComponent;
  let fixture: ComponentFixture<HorButtonGroupPMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorButtonGroupPMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorButtonGroupPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
