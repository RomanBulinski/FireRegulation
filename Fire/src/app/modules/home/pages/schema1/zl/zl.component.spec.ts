import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZlComponent } from './zl.component';

describe('ZlComponent', () => {
  let component: ZlComponent;
  let fixture: ComponentFixture<ZlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
