import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'http://148.113.195.163:5000/chatbot'; // URL del backend

  constructor(private http: HttpClient) {}

  getResponse(userMessage: string): Observable<string> {
    // Enviar el mensaje del usuario al servidor Flask
    return this.http.post<{ reply: string }>(this.apiUrl, { message: userMessage }).pipe(
      map(response => response.reply) // Extraer la respuesta
    );
  }
}
