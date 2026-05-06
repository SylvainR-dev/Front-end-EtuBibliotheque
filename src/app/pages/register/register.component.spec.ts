import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterComponent } from './register.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // GIVEN 
    // WHEN

    // THEN
    expect(component).toBeTruthy();
  });

  it('should display the register form', () => {
    // GIVEN 
    // WHEN

    // THEN
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should be invalid when form is empty', () => {
    // GIVEN 
    // WHEN

    // THEN
    expect(component.registerForm.invalid).toBeTruthy();
  });

  it('should be valid when form is filled', () => {
    // GIVEN

    // WHEN
    component.registerForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      login: 'johndoe',
      password: '123456'
    });

    // THEN
    expect(component.registerForm.valid).toBeTruthy();
  });

  it('should set submitted to true on onSubmit()', () => {
    // GIVEN 

    // WHEN
    component.onSubmit();

    // THEN
    expect(component.submitted).toBeTruthy();
  });

  it('should reset form on onReset()', () => {
    // GIVEN
    component.registerForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      login: 'johndoe',
      password: '123456'
    });

    // WHEN
    component.onReset();
    
    // THEN
    expect(component.submitted).toBeFalsy();
    expect(component.registerForm.value).toEqual({
      firstName: null,
      lastName: null,
      login: null,
      password: null
    });
  });
});