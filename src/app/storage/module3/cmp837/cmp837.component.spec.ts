import {NO_ERRORS_SCHEMA} from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatInputModule, MatRadioModule, MatSelectModule,} from '@angular/material';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

import { Cmp837Component } from './cmp837.component';

describe('Cmp837Component', () => {
  let component: Cmp837Component;
  let fixture: ComponentFixture<Cmp837Component>;

  beforeEach(async(() => {
    TestBed
        .configureTestingModule({
          declarations: [Cmp837Component],
          imports: [
            NoopAnimationsModule,
            ReactiveFormsModule,
            MatButtonModule,
            MatCardModule,
            MatInputModule,
            MatRadioModule,
            MatSelectModule,
          ],
          schemas: [NO_ERRORS_SCHEMA]
        })
        .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cmp837Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Make the test more realistic by doing lots of assertions
  for (let i = 0; i < 50; i++) {
    it('should compile', () => {
      expect(component).toBeTruthy();
    });
  }
});
