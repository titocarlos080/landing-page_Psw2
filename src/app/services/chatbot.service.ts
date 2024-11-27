import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CONSTANTES } from '../constantes';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
   private apiUrl = `${CONSTANTES.API_URL}/chatbot`; // Usa la constante para la URL   constructor(private http: HttpClient) {}

  constructor(private http: HttpClient) {}

  getResponse(userMessage: string): Observable<string> {
    // Enviar el mensaje del usuario al servidor Flask
    return this.http.post<{ reply: string }>(this.apiUrl, { message: userMessage }).pipe(
      map(response => response.reply) // Extraer la respuesta
    );
  }
}
