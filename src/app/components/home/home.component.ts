import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MailService } from '../../services/mail.service';
import { CommonModule } from '@angular/common';
import { ChatbotComponent } from '../chatbot/chatbot.component';

@Component({
  standalone:true,
  imports: [ReactiveFormsModule, CommonModule,ChatbotComponent], // Aquí importamos CommonModule  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  contactForm: FormGroup;
  submissionStatus: { message: string, success: boolean } | null = null; // Nuevo estado para mostrar el mensaje

  constructor(private fb: FormBuilder, private mailService: MailService) {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const formData = this.contactForm.value;

      this.mailService.sendMail(formData).subscribe({
        next: (response) => {
          console.log('Mensaje enviado con éxito:', response);
          this.submissionStatus = { message: 'Mensaje enviado con éxito.', success: true };
          this.contactForm.reset(); // Limpiar el formulario después de un envío exitoso
        },
        error: (error) => {
          console.error('Error al enviar el mensaje:', error);
          this.submissionStatus = { message: 'Error al enviar el mensaje.', success: false };
        },
        complete: () => {
          console.log('Proceso de envío de mensaje completado.');
        }
      });

    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
