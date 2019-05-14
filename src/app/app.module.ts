import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { HttpErrorInterceptor } from './interceptors/error-interceptor';
import { HttpConfigInterceptor} from './interceptors/httpconfig.interceptor';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ],
    providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true,
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: HttpConfigInterceptor, 
      multi: true 
    }
  ]
})
export class AppModule { }
