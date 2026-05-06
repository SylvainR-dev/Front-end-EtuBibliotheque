import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailComponent } from './detail.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { provideRouter } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailComponent],
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

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    // GIVEN 

    // WHEN

    // THEN
    expect(component).toBeTruthy();
  });

  it('should display the student detail title', () => {
    // GIVEN 
    // WHEN

    // THEN
    const h1 = fixture.nativeElement.querySelector('h1');
    expect(h1.textContent).toBe('Détail de l\'étudiant');
  });

  it('should display student data', () => {
    // GIVEN

    component.student = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com'
    };

    // WHEN
    fixture.detectChanges();
    
    // THEN
    const paragraphs = fixture.nativeElement.querySelectorAll('p');
    expect(paragraphs[0].textContent).toContain('John');
    expect(paragraphs[1].textContent).toContain('Doe');
    expect(paragraphs[2].textContent).toContain('john@test.com');
  });
});