import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerButtonGropuComponent } from './ver-button-gropu.component';

describe('VerButtonGropuComponent', () => {
  let component: VerButtonGropuComponent;
  let fixture: ComponentFixture<VerButtonGropuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerButtonGropuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerButtonGropuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
