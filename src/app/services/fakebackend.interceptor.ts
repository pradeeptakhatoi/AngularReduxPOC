import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { of, Observable, throwError } from 'rxjs';

export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const { url, method, headers, body } = request;

    switch (true) {
      case url.endsWith('/login') && method === 'POST':
          const {email, password} = body;
          if (email === 'admin@xyz.com' && password === '123456') {
            const resData = { id: 1, name: 'Pradeepta Khatoi', email, token: Math.random() };
            return of(new HttpResponse({ status: 200, body: resData }));
          } else {
            return throwError({ message: 'Username or password is incorrect' });
          }
      default:
        return next.handle(request); // pass through any requests not handled above
    }
  }
}
