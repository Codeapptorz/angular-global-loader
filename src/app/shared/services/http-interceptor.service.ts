import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppLoaderService } from '../components/app-loader/app-loader.service';

@Injectable({
  providedIn: 'root',
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor(private appLoaderService: AppLoaderService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {

    return next.handle(request).pipe(
      map((event) => {
        //This will be called both in case of response/error
        this.eventHandler(event);
        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        //This will be called both in case of HTTP error        
        return this.exceptionHandler(error);
      })
    );
  }

  // Exception Handler
  exceptionHandler(exception: any) {
    console.warn(exception.error);
    /**
     * In case of error in HTTP Request, pageLoadingEvent emitted with value as "false"
     * to stop loader and HTTP error handling can be handled here
     */
    this.appLoaderService.pageLoadingEvent.emit(false);
    return throwError(() => 'Error in response !!!');
  }

  // //Event Handler
  eventHandler(event: any) {
    if (event instanceof HttpResponse) {
      /**
       * In case of no error in HTTP Request, pageLoadingEvent is not called.
       * It will be called in the API subscription in the component., to stop the loader
       * Generic functionality can be placed here in case of NO error response
       */
      return;
    }
  }
}
