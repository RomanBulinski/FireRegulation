import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeightButtonComponent } from './height-button.component';

describe('HeightButtonComponent', () => {
  let component: HeightButtonComponent;
  let fixture: ComponentFixture<HeightButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeightButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeightButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
