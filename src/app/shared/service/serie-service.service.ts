import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Serie } from '../modele/serie';

@Injectable({
  providedIn: 'root'
})
export class SerieServiceService {

  constructor(private httpClient: HttpClient) { 
    console.log(`${environment.typicode_url}/3/trending/tv/day?api_key=${environment.api_key}`);
  }

  getSeries(): Observable<Serie[]>{
    return this.httpClient.get<Serie[]>(`${environment.typicode_url}/3/trending/tv/day?api_key=${environment.api_key}`)
  }
}
