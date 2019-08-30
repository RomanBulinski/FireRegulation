import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlButtonComponent } from './zl-button.component';

describe('ZlButtonComponent', () => {
  let component: ZlButtonComponent;
  let fixture: ComponentFixture<ZlButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
