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
  errorMessage: string = '';

  constructor(private router: Router) {}

  iniciarSesion() {
    // Expresión regular para validar correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Verificar si el usuario ha ingresado un correo electrónico válido
    if (!emailPattern.test(this.usuario)) {
      this.errorMessage = 'Por favor, ingrese un correo electrónico válido.';
      return; // Salir del método si la validación falla
    }

    localStorage.setItem('usuario', this.usuario);

    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasena);

    this.router.navigate(['/director']);
  }
}


