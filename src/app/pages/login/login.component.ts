import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router'; // ✅ Correct import
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { ApiService } from '../../../app/services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  email = '';
  password = '';

  // ✅ Inject the Router here
  constructor(private apiService: ApiService, private router: Router) {}

  onLogin() {
    this.apiService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.router.navigate(['/AccountSummary']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      },
    });
  }
}
