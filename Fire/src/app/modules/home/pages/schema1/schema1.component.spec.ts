import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schema1Component } from './schema1.component';


describe('Schema1Component', () => {
  let component: Schema1Component;
  let fixture: ComponentFixture<Schema1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schema1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Schema1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
