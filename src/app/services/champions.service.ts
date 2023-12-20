import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChampionsService {
  private apiUrl = 'api/champions';  // Assurez-vous que cela correspond à l'URL configurée dans votre in-memory-web-api

  constructor(private http: HttpClient) { }
  getChampions(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
