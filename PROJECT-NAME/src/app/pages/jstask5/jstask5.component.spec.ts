import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jstask5Component } from './jstask5.component';

describe('Jstask5Component', () => {
  let component: Jstask5Component;
  let fixture: ComponentFixture<Jstask5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jstask5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jstask5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
