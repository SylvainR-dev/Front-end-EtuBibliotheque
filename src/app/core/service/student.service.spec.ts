import { TestBed } from '@angular/core/testing';
import { StudentService } from './student.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Student } from '../models/Student';

describe('StudentService', () => {
  let service: StudentService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(StudentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call GET /api/students when getAll() is called', () => {
    // GIVEN

    // WHEN
    service.getAll().subscribe();

    // THEN
    const req = httpMock.expectOne('/api/students');
    expect(req.request.method).toBe('GET');
    req.flush([]);
  });

  it('should call POST /api/students when create() is called', () => {
    // GIVEN
    const student: Student = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    };

    // WHEN
    service.create(student).subscribe();

    // THEN
    const req = httpMock.expectOne('/api/students');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should call GET /api/students/:id when getById() is called', () => {
    // GIVEN 

    // WHEN
    service.getById(1).subscribe();

    // THEN
    const req = httpMock.expectOne('/api/students/1');
    expect(req.request.method).toBe('GET');
    req.flush({});
  });

  it('should call PUT /api/students/:id when update() is called', () => {
    // GIVEN 
    const student: Student = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    };

    // WHEN
    service.update(1, student).subscribe();

    // THEN 
    const req = httpMock.expectOne('/api/students/1');
    expect(req.request.method).toBe('PUT');
    req.flush({});
  });

  it('should call DELETE /api/students/:id when delete() is called', () => {
    // GIVEN 

    // WHEN 
    service.delete(1).subscribe();

    // THEN 
    const req = httpMock.expectOne('/api/students/1');
    expect(req.request.method).toBe('DELETE');
    req.flush({});
  });
});