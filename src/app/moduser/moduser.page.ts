import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIControllerService } from 'src/app/servicios/apicontroller.service';

@Component({
  selector: 'app-moduser',
  templateUrl: './moduser.page.html',
  styleUrls: ['./moduser.page.scss'],
})
export class ModuserPage implements OnInit {
  id!: string;  // Use definite assignment assertion
  usuario: any;
  nuevaContrasena: string = ''; // Para almacenar la nueva contraseña

  constructor(
    private activatedRoute: ActivatedRoute,
    private apiService: APIControllerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')!;
    this.cargarUsuario();
  }

  cargarUsuario() {
    // Obtener los datos del usuario según el ID
    this.apiService.getUsuarios().subscribe((usuarios) => {
      this.usuario = usuarios.find((u: any) => u.id === this.id);
      console.log(this.usuario);
    });
  }

  //metodo actualizar usuario
  async guardarCambios() {
    try {
      const usuarioActualizado = { ...this.usuario, contrasena: this.nuevaContrasena };

      await this.apiService.updateUsuarios(this.id, usuarioActualizado).toPromise();
      console.log('Contraseña actualizada correctamente');

      // Redirigir a la página de administración
      this.router.navigate(['/admin']);
    } catch (error) {
      console.error('Error al actualizar la contraseña:', error);
    }
  }
}





