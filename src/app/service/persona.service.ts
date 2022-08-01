import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  /* Llamo a estos archivos del back end desde el front creando una variable URL */
  URL = 'https://castellanoap.herokuapp.com/personas/';

  /* Creame una variable private http que responda al http client */
  constructor(private http: HttpClient) { }

  /* el observable son para peticiones asincronas, voy a ir creando las concatenaciones de la URL */
  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL+ 'traer/perfil');
  }

    public detailPersona(id: number): Observable<Persona> {
      return this.http.get<Persona>(this.URL+ `detail/${id}`);
    }
  
    public savePersona(persona: Persona): Observable<any> {
      return this.http.post<any>(this.URL+ 'save/', persona);
    }
  
    public updatePersona(id: number, persona: Persona): Observable<any> {
      return this.http.put<any>(this.URL+ `update/${id}`, persona);
    }
  
    public deletePersona(id: number): Observable<any> {
      return this.http.delete<any>(this.URL+ `delete/${id}`);
  }
  
}
