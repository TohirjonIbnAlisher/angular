import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFormBuilder } from './register-form-builder';

describe('RegisterFormBuilder', () => {
  let component: RegisterFormBuilder;
  let fixture: ComponentFixture<RegisterFormBuilder>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterFormBuilder]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterFormBuilder);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
