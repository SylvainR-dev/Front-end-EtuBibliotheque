import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // GIVEN
    // WHEN

    // THEN
    expect(component).toBeTruthy();
  });

  it('should display the login form', () => {
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
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('should be valid when form is filled', () => {
    // GIVEN

    // WHEN
    component.loginForm.setValue({
      login: 'johndoe',
      password: '123456'
    });
    
    // THEN
    expect(component.loginForm.valid).toBeTruthy();
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

    component.loginForm.setValue({
      login: 'johndoe',
      password: '123456'
    });

    // WHEN
    component.onReset();
    
    // THEN
    expect(component.submitted).toBeFalsy();
    expect(component.loginForm.value).toEqual({ login: null, password: null });
  });
});