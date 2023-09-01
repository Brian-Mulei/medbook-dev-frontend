import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient){}

  createPatient(patientData: any):Observable<any>{
    return this.http.post('http://127.0.0.1:8000/api/InsertPatient',patientData);
  }

  getPatients(): Observable<any[]>{

    return this.http.get<any[]>('http://127.0.0.1:8000/api/GetPatient');

  }
 }
