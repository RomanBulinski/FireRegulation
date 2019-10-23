import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePMComponent } from './table-pm.component';

describe('TablePMComponent', () => {
  let component: TablePMComponent;
  let fixture: ComponentFixture<TablePMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
