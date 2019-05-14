import { HttpEvent, 
         HttpInterceptor, 
         HttpHandler, 
         HttpRequest, 
         HttpResponse,
         HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class HttpConfigInterceptor  implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    console.log('request', );
    if(request.url.indexOf('flipkart') == -1) { 
      request = request.clone({ headers: request.headers.set('Authorization', 'LAKHAN') });
    }
  
    return next.handle(request);
  }
} 