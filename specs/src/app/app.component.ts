import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=76d1b43ba3695cfae59aa9f7dc9b4877';
export class AppComponent {
  title = 'specs';
  constructor(private http: HttpClient) { }
}
