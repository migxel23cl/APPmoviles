import { Component } from '@angular/core';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {
  correo: string = '';
  codigo: string = '';
  codigoEnviado: boolean = false; // Para controlar la visibilidad del input de código

  constructor() {}

  enviarCodigo() {
    if (this.correo) {
      console.log('Enviando código al correo:', this.correo);
      // Aquí iría la lógica para enviar el código
      this.codigoEnviado = true;
    } else {
      console.log('Por favor, ingrese el correo electrónico.');
    }
  }

  mostrarContrasena() {
    if (this.codigo) {
      console.log('Código ingresado:', this.codigo);
      // Aquí iría la lógica para verificar el código y mostrar la contraseña
    } else {
      console.log('Por favor, ingrese el código de verificación.');
    }
  }
}

