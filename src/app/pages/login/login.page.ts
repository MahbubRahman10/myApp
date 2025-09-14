import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';


import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})

export class LoginPage {
  credentials = { email: '', password: '' };

  constructor(
    private apiService: ApiService,
    private authService: AuthService,
    private router: Router
  ) {}

 // Method to handle user login  
  login() {
    this.apiService.login(this.credentials).subscribe(
      (response) => {
        this.authService.setToken(response.token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login error', error);
      }
    );
  }
}
