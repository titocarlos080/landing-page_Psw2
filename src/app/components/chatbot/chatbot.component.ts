import { Component } from '@angular/core';
import { ChatbotService } from '../../services/chatbot.service';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chatbot',
  standalone: true,
  imports: [NgClass, FormsModule, NgIf, NgForOf],
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent {
  messages: { text: string; sender: 'user' | 'bot' }[] = [];  // Pila de mensajes
  userInput: string = '';
  chatVisible: boolean = true; // Controla la visibilidad del chatbot

  constructor(private chatbotService: ChatbotService) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    // Agregar el mensaje del usuario a la pila
    this.messages.push({ text: this.userInput, sender: 'user' });

    // Llamar al servicio para obtener la respuesta del bot
    this.chatbotService.getResponse(this.userInput).subscribe((response) => {
      this.messages.push({ text: response, sender: 'bot' });
    });

    // Limpiar el campo de entrada
    this.userInput = '';
  }

  // Método para alternar la visibilidad del chatbot
  toggleChat() {
    this.chatVisible = !this.chatVisible;
  }
}
