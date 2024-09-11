import { Component } from '@angular/core';
import { NavController } from '@ionic/angular'; // Importa el NavController para la navegación

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  correo: string = '';  // Inicializa las variables
  codigo: string = '';
  codigoEnviado: boolean = false;
  contrasenaRecuperada: boolean = false;
  contrasena: string = '';

  constructor(private navCtrl: NavController) {} // Inyecta NavController

  // Simula el envío del código
  enviarCodigo() {
    if (this.correo) {
      this.codigoEnviado = true;
      // Lógica para enviar el código al correo
      console.log('Código enviado a: ' + this.correo);
    } else {
      console.error('Debes ingresar un correo electrónico válido');
    }
  }

  // Simula la recuperación de la contraseña
  mostrarContrasena() {
    if (this.codigo) {
      // Simula la validación del código y la recuperación de la contraseña
      this.contrasena = '123456'; // Simula una contraseña recuperada
      this.contrasenaRecuperada = true;
      console.log('Contraseña recuperada: ' + this.contrasena);
    } else {
      console.error('Debes ingresar el código de verificación');
    }
  }

  // Función para redirigir al login
  volverAlLogin() {
    this.navCtrl.navigateBack('/login');  // Navega de vuelta a la página de login
  }
}



