import { Component, OnInit } from '@angular/core';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';
import { StorageService } from '../servicios/storage.service'; // Asegúrate de ajustar la ruta según sea necesario

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  usuarios: any[] = [];

  constructor(private api: APIControllerService, private storageService: StorageService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.api.getUsuarios().subscribe(
      (data) => {
        this.usuarios = data;
        console.log(this.usuarios);
      },
      (error) => {
        console.log("Error en la llamada :" + error);
      }
    );
  }

  modificarUsuario(id: any) {
    // Implementa la lógica para modificar el usuario si es necesario
  }

  async eliminarUsuario(id: string) {
    try {
      // Llamar a la API para eliminar el usuario de la base de datos
      await this.api.deleteUsuarios(id).toPromise(); // Asegúrate de que tu API permita esto
      console.log(`Usuario con ID: ${id} eliminado de la API correctamente.`);
      
      // Ahora eliminar del almacenamiento local
      await this.storageService.remove(id);
      console.log(`Usuario con ID: ${id} eliminado del almacenamiento local correctamente.`);
      
      // Recargar la lista de usuarios después de la eliminación
      this.cargarUsuarios();
    } catch (error) {
      console.error('Error al eliminar el usuario:', error);
    }
  }
}

