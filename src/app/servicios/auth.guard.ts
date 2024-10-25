import { CanActivateFn, Router } from '@angular/router';
import { UserService } from './storage.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {

  // Instanciamos el servicio de usuario y el enrutador
  const authService = inject(UserService);
  const router = inject(Router);

  // Esperamos la respuesta de isConected
  const isConected = await authService.isConected();

  // Si está conectado, permitimos el acceso
  if (isConected) {
    return true;
  } else {
    // Si no está autenticado, redirigimos al login
    router.navigate(['/login']);
    return false;
  }
};
