import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PowerGeneration } from '@app/interfaces/power-generation';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getPowerGenerationData(
    from: string,
    to: string
  ): Observable<PowerGeneration> {
    return this.http.get<PowerGeneration>(
      `https://api.carbonintensity.org.uk/generation/${from}/${to}`
    );
  }
}
