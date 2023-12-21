import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChampionsService {
  private apiUrl = 'api/champions';

  constructor(private http: HttpClient) {}
  getChampions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
