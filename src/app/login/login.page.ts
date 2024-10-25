import { Component } from '@angular/core';
import { UserService } from '../servicios/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  correo: string = '';  // Cambiado de "usuario" a "correo"
  contrasena: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  async iniciarSesion() {
    const usuarioValido = await this.userService.loginUser(this.correo, this.contrasena);
    
    if (usuarioValido) {
      this.router.navigate(['/director']);  // Navega a la página principal si el login es exitoso
    } else {
      this.errorMessage = 'Usuario o contraseña incorrectos.';
    }
  }
}




