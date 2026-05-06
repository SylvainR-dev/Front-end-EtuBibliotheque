import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideRouter, ActivatedRoute } from '@angular/router';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { params: { id: 1 } }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    const req = httpMock.expectOne('/api/students/1');
    req.flush({ id: 1, firstName: 'John', lastName: 'Doe', email: 'john@test.com' });
    fixture.detectChanges();
  });

  // Vérifie qu'il n'y a pas de requêtes non interceptées après chaque test
  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    // GIVEN 
    // WHEN

    // THEN
    expect(component).toBeTruthy();
  });

  it('should display the edit form', () => {
    // GIVEN 
    // WHEN

    // THEN
    const form = fixture.nativeElement.querySelector('form');
    expect(form).toBeTruthy();
  });

  it('should prefill form with student data', () => {
    // GIVEN 
    // WHEN

    // THEN
    expect(component.editForm.value).toEqual({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    });
  });

  it('should be invalid when form is empty', () => {
    // GIVEN 

    // WHEN
    component.editForm.reset();
    
    // THEN
    expect(component.editForm.invalid).toBeTruthy();
  });

  it('should set submitted to true on onSubmit()', () => {
    // GIVEN 

    // WHEN
    component.onSubmit();
    httpMock.expectOne('/api/students/1');
    
    // THEN
    expect(component.submitted).toBeTruthy();
  });

  it('should reset form on onReset()', () => {
    // GIVEN 

    // WHEN
    component.onReset();
    
    // THEN
    expect(component.submitted).toBeFalsy();
    expect(component.editForm.value).toEqual({
      firstName: null,
      lastName: null,
      email: null
    });
  });
});