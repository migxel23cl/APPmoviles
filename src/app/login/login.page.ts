import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    // Guardamos el nombre del usuario en localStorage
    localStorage.setItem('usuario', this.usuario);

    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasena);

    // Navegamos a la página del director
    this.router.navigate(['/director']);
  }
}


