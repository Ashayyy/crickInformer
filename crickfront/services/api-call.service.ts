import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient: HttpClient) { }

   getAllMatches()
   {
     return this._httpClient.get(`${environment.apiUrl}/match`);

   }

   getLiveMatches()
   {
      return this._httpClient.get(`${environment.apiUrl}/match/live`)
   }

   getPointTable()
   {
      return this._httpClient.get(`${environment.apiUrl}/match/cwc2023pointstable`)
   }
   
}
