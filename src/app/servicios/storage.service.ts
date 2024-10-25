import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _storage: Storage | null = null;
  private USERS_KEY = 'users';
  private CURRENT_USER_KEY = 'currentUser'; // Para guardar al usuario autenticado

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  // Guardar nuevo usuario
  async addUser(usuario: any): Promise<any> {
    const users = (await this.getUsers()) || [];
    users.push(usuario);
    return this._storage?.set(this.USERS_KEY, users);
  }

  // Obtener usuarios
  async getUsers(): Promise<any[]> {
    return this._storage?.get(this.USERS_KEY) || [];
  }

  // Validar credenciales de usuario y guardar al usuario autenticado
  async loginUser(correo: string, contrasena: string): Promise<any> {
    const users = await this.getUsers();
    const usuario = users.find((user: any) => user.correo === correo && user.contrasena === contrasena);

    if (usuario) {
      // Guardar el usuario actual
      await this._storage?.set(this.CURRENT_USER_KEY, usuario);
    }

    return usuario;
  }

  // Verificar si hay un usuario autenticado
  async isConected(): Promise<boolean> {
    const currentUser = await this._storage?.get(this.CURRENT_USER_KEY);
    return currentUser ? true : false;
  }

  // Cerrar sesión
  async logout(): Promise<void> {
    await this._storage?.remove(this.CURRENT_USER_KEY);
  }
}

