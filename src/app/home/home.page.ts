import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  /* Estado de carga */
  spinner = false;

  constructor(private router: Router) {}

  cambiarSpinner() {
    this.spinner = !this.spinner;
  }

  iniciarSesion() {
    this.cambiarSpinner();

    /* setTimeout permite un pequeño delay para realizar la acción */
    setTimeout(() => {
      // Aquí navegas a la siguiente página
      this.router.navigate(['/login']);

      // Apaga el spinner después de la navegación
      this.cambiarSpinner();
    }, 3000); // 3 segundos de espera antes de navegar
  }
}


