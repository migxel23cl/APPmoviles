import { Component } from '@angular/core';
import { UserService } from '../servicios/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  correo: string = '';
  contrasena: string = '';
  confirmarContrasena: string = '';
  errorMessage: string = '';

  constructor(private userService: UserService, private router: Router) {}

  async registrarse() {
    if (this.contrasena !== this.confirmarContrasena) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    const nuevoUsuario = {
      correo: this.correo,  // Usamos "correo" como identificador
      contrasena: this.contrasena
    };

    await this.userService.addUser(nuevoUsuario);
    this.router.navigate(['/login']);  // Redirige al login después del registro
  }
}

