import { CanActivateFn, Router } from '@angular/router';
import { AuthenticatorService } from './authenticator.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthenticatorService);
  const router = inject(Router);

  // Aquí esperamos el estado de conexión antes de proceder
  const isLoggedIn = await authService.isConectedAsync();

  // Log para verificar el estado de autenticación
  console.log('AuthGuard - isLoggedIn:', isLoggedIn);

  if (isLoggedIn) {
    console.log('Acceso permitido');
    return true; // Permite el acceso
  } else {
    console.log('Redirigiendo al home');
    router.navigate(['/home']); // Redirige si no está autenticado
    return false;
  }
};

