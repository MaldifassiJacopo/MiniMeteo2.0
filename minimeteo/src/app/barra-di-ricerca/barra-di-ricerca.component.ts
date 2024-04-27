import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-barra-di-ricerca',
  templateUrl: './barra-di-ricerca.component.html',
  styleUrls: ['./barra-di-ricerca.component.css']
})
export class BarraDiRicercaComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;

  constructor(private http:HttpClient) { 
  }
  Token='8db500fac7d0bc78a5615c92ddbfde5a'
 
  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;

  this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.query}&appid=${this.Token}&units=metric&lang=it`).subscribe(data => {
this.results=data
  });
  }
}
