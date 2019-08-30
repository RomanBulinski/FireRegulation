import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schema3Component } from './schema3.component';

describe('Schema3Component', () => {
  let component: Schema3Component;
  let fixture: ComponentFixture<Schema3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schema3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Schema3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
