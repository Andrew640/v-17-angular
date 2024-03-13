import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '@app/interfaces/car';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getCosts(): Observable<Car[]> {
    return this.http.get<Car[]>('/assets/cars.json');
  }
}
