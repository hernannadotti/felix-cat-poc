import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IBreed } from '../models/breed';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient
  ) { }

  getPetsList(): Observable<IBreed[]> {
    return this.http.get('https://api.thecatapi.com/v1/breeds') as Observable<IBreed[]>;
  }

  getPetImage(imageReference: string): Observable<IBreed> {
    return this.http.get(`https://api.thecatapi.com/v1/images/${imageReference}`) as Observable<IBreed>;
  }

  getBreedById(id: string): Observable<IBreed> {
    return this.http.get(`https://api.thecatapi.com/v1/breeds/${id}`) as Observable<IBreed>;
  }
}
