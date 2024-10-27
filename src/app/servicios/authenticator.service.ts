import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatorService {
  connnectionStatus: boolean;

  constructor(private storage: StorageService) {this.connnectionStatus= false;}

  async loginBDD(correo: string, contrasena: string): Promise<boolean> {
    try {
      console.log('Buscando usuario con correo:', correo);
      const res = await this.storage.get(correo);
      console.log('Usuario encontrado en la BDD:', res);  // Verificar qué se obtiene del almacenamiento
  
      if (res && res.contrasena === contrasena) { 
        this.connnectionStatus = true;
        console.log('Login exitoso, connnectionStatus:', this.connnectionStatus);
        return true;
      } else {
        this.connnectionStatus = false;
        console.log('Login fallido, connnectionStatus:', this.connnectionStatus);
        return false;
      }
    } catch (error) {
      console.log('Error en el sistema: ' + error);
      this.connnectionStatus = false;
      return false;
    }
  }
  

  async isConectedAsync(): Promise<boolean> {
    console.log('isConectedAsync - Estado de conexión:', this.connnectionStatus);
    return this.connnectionStatus;
  }

  logout() {
    this.connnectionStatus = false;
  }

  async registrar(usuario: any): Promise<boolean> {
    try {
      const res = await this.storage.set(usuario.correo, usuario);
      console.log('Usuario registrado:', usuario);
      return res != null;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      return false;
    }
  }
  
}

