import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jstask6Component } from './jstask6.component';

describe('Jstask6Component', () => {
  let component: Jstask6Component;
  let fixture: ComponentFixture<Jstask6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jstask6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jstask6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
