import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIControllerService } from '../servicios/apicontroller.service'; // Ajusta la ruta si es necesario
import { AuthenticatorService } from '../servicios/authenticator.service'; // Asegúrate de importar el servicio de autenticación

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  correo: string = '';
  contrasena: string = '';
  errorMessage: string = '';

  constructor(
    private apiService: APIControllerService,
    private router: Router,
    private authenticatorService: AuthenticatorService  // Inyectar el servicio de autenticación
  ) {}

  async iniciarSesion() {
    try {
      // Obtener todos los usuarios desde la API
      const usuarios = await this.apiService.getUsuarios().toPromise();

      // Buscar si el usuario con el correo y la contraseña ingresados existe
      const usuarioEncontrado = usuarios.find(
        (usuario: any) => usuario.correo === this.correo && usuario.contrasena === this.contrasena
      );

      if (usuarioEncontrado) {
        console.log('Usuario encontrado:', usuarioEncontrado);

        // Llamar al servicio de autenticación para actualizar el estado de conexión
        const loginExitoso = await this.authenticatorService.loginBDD(this.correo, this.contrasena);
        
        if (loginExitoso) {
          console.log('Login correcto, redirigiendo a la vista del director...');
          this.router.navigate(['/director']);  // Cambiar a la página de director
        } else {
          this.errorMessage = 'Correo o contraseña incorrectos';
          console.log('Login fallido, redirigiendo al login.');
        }
      } else {
        // Si no se encuentra el usuario, mostrar mensaje de error
        this.errorMessage = 'Correo o contraseña incorrectos';
        console.log('Usuario no encontrado en la base de datos');
      }
    } catch (error) {
      // Manejar errores en caso de que falle la solicitud a la API
      this.errorMessage = 'Error al iniciar sesión. Intente de nuevo.';
      console.error('Error al obtener usuarios: ', error);
    }
  }
}





