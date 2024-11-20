import { Component, NgModule } from '@angular/core';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ChatbotComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
