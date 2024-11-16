import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page';
  private apiKey = environment.apiKey;
  private apiUrl = environment.apiUrl;
  private urlGraphql = environment.urlGraphql;


  getApiKey(){
    return this.apiKey;
  }

  getApiUrl(){
    return this.apiUrl;
  }

  getUrlGraphql(){
    return this.urlGraphql;
  }
}
