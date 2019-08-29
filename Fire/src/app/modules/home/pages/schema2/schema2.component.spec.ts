import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Schema2Component } from './schema2.component';

describe('Schema2Component', () => {
  let component: Schema2Component;
  let fixture: ComponentFixture<Schema2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Schema2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Schema2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
