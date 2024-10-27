import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Para obtener el ID del usuario de la ruta
import { APIControllerService } from '../servicios/apicontroller.service';
import { NavController } from '@ionic/angular'; // Para navegar de regreso o a otras páginas

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.page.html',
  styleUrls: ['./moduser.page.scss'],
})
export class ModuserPage implements OnInit {
  usuario: any = {
    correo: '',
    password: ''
  };
  errorMessage: string = '';
  userId: string = '';

  constructor(
    private route: ActivatedRoute,  // Para obtener parámetros de la URL
    private apiService: APIControllerService,  // Servicio para interactuar con la API
    private navCtrl: NavController  // Para navegar entre vistas
  ) {}

  ngOnInit() {
    // Obtener el ID del usuario de los parámetros de la URL
    this.userId = this.route.snapshot.paramMap.get('id')!;
    this.cargarUsuario(this.userId);
  }

  cargarUsuario(id: string) {
    // Asegúrate de que este método existe en tu servicio APIControllerService
    this.apiService.getUsuarioById(id).subscribe(
      (data) => {
        this.usuario = data;
        console.log('Datos del usuario cargados:', this.usuario);
      },
      (error) => {
        console.error('Error al cargar el usuario:', error);
        this.errorMessage = 'Error al cargar los datos del usuario.';
      }
    );
  }

  modificarUsuario() {
    if (!this.usuario.correo || !this.usuario.password) {
      this.errorMessage = 'Todos los campos son obligatorios';
      return;
    }

    // Llamar al servicio de la API para modificar el usuario
    this.apiService.updateUsuarios(this.userId, this.usuario).subscribe(
      (response) => {
        console.log('Usuario actualizado correctamente:', response);
        this.navCtrl.navigateBack('/admin'); // Redirigir a la página de administración tras la modificación
      },
      (error) => {
        console.error('Error al modificar el usuario:', error);
        this.errorMessage = 'Error al actualizar el usuario.';
      }
    );
  }
}



