import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardComponent } from './dashboard.component';
import { RouterModule } from '@angular/router';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardComponent, RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
    expect(h1.textContent).toBe('Dashboard');
  });

  it('should have a voir tous button', () => {
    // GIVEN 
    // WHEN

    // THEN
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons[0].textContent).toBe('Voir tous');
  });

  it('should have a créer button', () => {
    // GIVEN 
    // WHEN

    // THEN
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons[1].textContent).toBe('Créer');
  });
});