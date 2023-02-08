import { Message } from './../../../../libs/api-interfaces/src/lib/api-interfaces';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'project-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}

}
