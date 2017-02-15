/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DataRowsComponent } from './data-rows.component';

describe('DataRowsComponent', () => {
  let component: DataRowsComponent;
  let fixture: ComponentFixture<DataRowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataRowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataRowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
