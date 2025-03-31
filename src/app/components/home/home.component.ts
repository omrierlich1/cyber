import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  standalone: true,
})
export class HomeComponent {
  constructor(private authService: AuthService) {}

  login() {
    this.authService.login();
  }
}
