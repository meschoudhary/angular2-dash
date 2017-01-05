/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PipeArgsComponent } from './pipe-args.component';

describe('PipeArgsComponent', () => {
  let component: PipeArgsComponent;
  let fixture: ComponentFixture<PipeArgsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipeArgsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeArgsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
