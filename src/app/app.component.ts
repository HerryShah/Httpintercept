import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  constructor(
    private http: HttpClient
  ) {
    this.http.get('www.google.com').subscribe(console.log);
    this.http.get('www.flipkart.com').subscribe(console.log);
  }
}
