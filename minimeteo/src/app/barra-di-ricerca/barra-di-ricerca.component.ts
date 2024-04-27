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
  Token='e2a83a19e1a956c4a374f915a48841cc'
 
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
