/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PureImpurePipesComponent } from './pure-impure-pipes.component';

describe('PureImpurePipesComponent', () => {
  let component: PureImpurePipesComponent;
  let fixture: ComponentFixture<PureImpurePipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureImpurePipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PureImpurePipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
