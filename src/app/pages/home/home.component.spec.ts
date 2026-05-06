import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, RouterModule.forRoot([])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
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
    expect(h1.textContent).toBe('EtuBibliotheque');
  });

  it('should have a register button', () => {
    // GIVEN 
    // WHEN

    // THEN
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons[0].textContent).toBe('Créer compte');
  });

  it('should have a login button', () => {
    // GIVEN 
    // WHEN
    
    // THEN
    const buttons = fixture.nativeElement.querySelectorAll('button');
    expect(buttons[1].textContent).toBe('Connexion');
  });
});