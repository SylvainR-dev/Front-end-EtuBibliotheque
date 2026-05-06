import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListComponent } from './list.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListComponent],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        provideRouter([]),
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();

    const req = httpMock.expectOne('/api/students');
    req.flush([
      { id: 1, firstName: 'John', lastName: 'Doe', email: 'john@test.com' },
      { id: 2, firstName: 'Jane', lastName: 'Smith', email: 'jane@test.com' }
    ]);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    // GIVEN 
    // WHEN

    // THEN
    expect(component).toBeTruthy();
  });

  it('should display the title', () => {
    // GIVEN 
    // WHEN

    // THEN
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toContain('La liste des étudiants');
  });

  it('should display the list of students', () => {
    // GIVEN 
    // WHEN

    // THEN
    const rows = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(rows.length).toBe(2);
  });

  it('should display student data in the table', () => {
    // GIVEN 
    // WHEN

    // THEN
    const firstRow = fixture.nativeElement.querySelector('tbody tr');
    expect(firstRow.textContent).toContain('John');
    expect(firstRow.textContent).toContain('Doe');
    expect(firstRow.textContent).toContain('john@test.com');
  });

  it('should delete a student from the list', () => {
    // GIVEN 

    // WHEN

    component.delete(1);
    const req = httpMock.expectOne('/api/students/1');
    req.flush({});
    fixture.detectChanges();
    
    // THEN
    expect(component.students.length).toBe(1);
    expect(component.students[0].id).toBe(2);
  });
});