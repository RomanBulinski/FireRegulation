import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorButtonGroupComponent } from './hor-button-group.component';

describe('HorButtonGroupComponent', () => {
  let component: HorButtonGroupComponent;
  let fixture: ComponentFixture<HorButtonGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorButtonGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorButtonGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
