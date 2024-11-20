import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions'; // Cambia si usas otro servicio
  private apiKey = 'TU_CLAVE_API_AQUÍ'; // Asegúrate de mantener esto seguro en el backend

  constructor(private http: HttpClient) {}

  getResponse(userMessage: string): Observable<string> {
    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`
    };

    const body = {
      model: 'gpt-4',
      messages: [{ role: 'user', content: userMessage }]
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      // Mapear la respuesta para extraer el contenido del mensaje
      map((response) => response.choices[0].message.content)
    );
  }
}
