import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { Register } from '../models/Register';
import { Login } from '../models/Login';

describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  // Configuration du module de test AVANT chaque test. Avec le Http et en injectant le service correspondant. 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
      ]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  // Eviter les faux positifs : vérifie après chaque test qu'il ne reste pas de requêtes HTTP en suspens
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call POST /api/register when register() is called', () => {
    // GIVEN : je prépare un objet Register avec les données indispensables
    const user: Register = {
      firstName: 'John',
      lastName: 'Doe',
      login: 'johndoe',
      password: '123456'
    };

    // WHEN : on appelle la méthode register() du service
    // subscribe() est INDISPENSABLE pour déclencher l'Observable et donc qui va enregistrer mon utilisateur 
    service.register(user).subscribe();

    // THEN : je vérifie ici que ma requête POST est bien envoyée à /api/register
    const req = httpMock.expectOne('/api/register');
    expect(req.request.method).toBe('POST');
    req.flush({});
  });

  it('should call POST /api/login when login() is called', () => {
    // GIVEN : objet Login avec les données requises
    const user: Login = {
      login: 'johndoe',
      password: '123456'
    };

    // WHEN : la méthode login() du service avec bien sur le SUBSCRIBE
    service.login(user).subscribe();

    // THEN : pour vérifier que la requête POST est bien envoyée à /api/login
    const req = httpMock.expectOne('/api/login');
    expect(req.request.method).toBe('POST');
    req.flush('fake-token');
  });
});