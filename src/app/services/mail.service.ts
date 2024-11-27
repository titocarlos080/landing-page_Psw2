import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
@Injectable({
  providedIn: 'root',
})
export class MailService {
  private apiUrl = 'http://hepatoscan.salud.bo:5000/mensajes'; // URL del backend Flask
   constructor(private http: HttpClient) {}

  sendMail(data: any): Observable<any> {
    
    const headers = { 'Content-Type': 'application/json' };
    return this.http.post<any>(this.apiUrl, data, { headers });
  }
  
}
