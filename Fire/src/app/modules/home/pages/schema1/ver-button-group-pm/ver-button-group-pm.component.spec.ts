import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerButtonGroupPMComponent } from './ver-button-group-pm.component';

describe('VerButtonGroupPMComponent', () => {
  let component: VerButtonGroupPMComponent;
  let fixture: ComponentFixture<VerButtonGroupPMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerButtonGroupPMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerButtonGroupPMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
