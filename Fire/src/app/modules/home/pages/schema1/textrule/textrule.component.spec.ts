import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextruleComponent } from './textrule.component';

describe('TextruleComponent', () => {
  let component: TextruleComponent;
  let fixture: ComponentFixture<TextruleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextruleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
