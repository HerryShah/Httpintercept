import { HttpEvent, 
         HttpInterceptor, 
         HttpHandler, 
         HttpRequest, 
         HttpResponse,
         HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export class HttpErrorInterceptor  implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request)
               .pipe(
                 catchError( (error: HttpErrorResponse) => {   
                   console.log('JSK', error);
                    let errMsg = '';
                    // Client Side Error
                    if (error.error instanceof ErrorEvent) {		
                      errMsg = `Error Hardi: ${error.error.message}`;
                    } 
                    else {  // Server Side Error
                      errMsg = `Error Code Hardi: ${error.status},  Message: ${error.message}`;
                    }
                    // return an observable
                    return throwError(errMsg);
                  })
               )
  }
} 