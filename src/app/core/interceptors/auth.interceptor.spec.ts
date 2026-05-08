import { TestBed } from '@angular/core/testing';
import { HttpRequest, HttpHandlerFn } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

describe('AuthInterceptor', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should add Authorization header when token exists', (done) => {
    localStorage.setItem('token', 'fake-token');
    const req = new HttpRequest('GET', '/api/test');
    const next: HttpHandlerFn = (request) => {
      expect(request.headers.get('Authorization')).toBe('Bearer fake-token');
      done();
      return new (require('@angular/common/http').HttpResponse)({});
    };
    TestBed.runInInjectionContext(() => authInterceptor(req, next as any));
  });

  it('should not add Authorization header when no token', (done) => {
    localStorage.removeItem('token');
    const req = new HttpRequest('GET', '/api/test');
    const next: HttpHandlerFn = (request) => {
      expect(request.headers.get('Authorization')).toBeNull();
      done();
      return new (require('@angular/common/http').HttpResponse)({});
    };
    TestBed.runInInjectionContext(() => authInterceptor(req, next as any));
  });
});
