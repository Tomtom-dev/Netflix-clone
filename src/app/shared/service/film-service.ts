import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Film } from "../modele/film";

@Injectable({
    providedIn: 'root'
  })
export class FilmService {

    constructor( private httpClient: HttpClient){
        console.log(`${environment.typicode_url}/3/movie/157336?api_key=${environment.api_key}`);
    }

    getFilms(): Observable<Film[]>{
        return this.httpClient.get<Film[]>(`${environment.typicode_url}/3/list/56?api_key=${environment.api_key}`);
        
    }
    
}
