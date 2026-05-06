import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateComponent } from './create.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('CreateComponent', () => {
  let component: CreateComponent;
  let fixture: ComponentFixture<CreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // GIVEN 


    // WHEN

    // THEN
    expect(component).toBeTruthy();
  });

  it('should display the create form', () => {
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
    expect(component.createForm.invalid).toBeTruthy();
  });

  it('should be valid when form is filled', () => {
    // GIVEN

    // WHEN
    component.createForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    });

    // THEN
    expect(component.createForm.valid).toBeTruthy();
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
    component.createForm.setValue({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    });

    // WHEN
    component.onReset();
    
    // THEN
    expect(component.submitted).toBeFalsy();
    expect(component.createForm.value).toEqual({
      firstName: null,
      lastName: null,
      email: null
    });
  });
});