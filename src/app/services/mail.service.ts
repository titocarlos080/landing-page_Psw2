import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANTES } from '../constantes';
import { HttpClient } from '@angular/common/http';
 @Injectable({
  providedIn: 'root',
})
export class MailService {
    private apiUrl = `${CONSTANTES.API_URL}/mensajes`; // Usa la constante para la URL   constructor(private http: HttpClient) {}
    constructor(private http: HttpClient) {}
    
  sendMail(data: any): Observable<any> {
    
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl, data, { headers });
  }
  
}
