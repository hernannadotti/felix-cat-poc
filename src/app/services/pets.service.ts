import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(
    private http: HttpClient
  ) { }

  getPetsList() {
    return this.http.get('https://api.thecatapi.com/v1/breeds');
  }
}
