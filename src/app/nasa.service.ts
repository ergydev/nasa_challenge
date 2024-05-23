import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  

  constructor(private http: HttpClient) { }

  getImageOfTheDay(): Observable<any> {
    return this.http.get('https://api.nasa.gov/planetary/apod?api_key=RywqUvfcrSar6R1jtdf4lEQAtgUJt4iQj0f245L8')
  }
}
