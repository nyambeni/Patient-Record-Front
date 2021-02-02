import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'http://localhost:8080/patient';

  constructor(private http: HttpClient) { }

  getPatient(idNo:string): Observable<any> {
     return this.http.get('${this.baseUrl}/${idNo}');
  }

};
