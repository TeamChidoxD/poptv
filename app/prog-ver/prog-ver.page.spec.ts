import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgVerPage } from './prog-ver.page';

describe('ProgVerPage', () => {
  let component: ProgVerPage;
  let fixture: ComponentFixture<ProgVerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgVerPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgVerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
