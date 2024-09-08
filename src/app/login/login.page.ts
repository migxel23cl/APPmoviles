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
    // Aquí puedes agregar la lógica para iniciar sesión
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.contrasena);
    // Ejemplo de navegación después de iniciar sesión
    this.router.navigate(['/home']);
  }
}

