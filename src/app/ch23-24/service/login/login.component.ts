import { Component, inject } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private authService = inject(AuthService);

  onLogin(){
  this.authService.token = 'abc123';
  console.log('Token 已設定:', this.authService.token);
  }
}
