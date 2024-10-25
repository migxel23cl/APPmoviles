import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _storage: Storage | null = null;
  private USERS_KEY = 'users';

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

  // Validar credenciales de usuario
  async loginUser(correo: string, contrasena: string): Promise<any> {
    const users = await this.getUsers();
    return users.find((user: any) => user.correo === correo && user.contrasena === contrasena);
  }
}
