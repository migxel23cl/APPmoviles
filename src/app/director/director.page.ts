import { Component } from '@angular/core';

@Component({
  selector: 'app-director',
  templateUrl: './director.page.html',
  styleUrls: ['./director.page.scss'],
})
export class DirectorPage {
  nombreUsuario: string = '';

  constructor() {
    this.nombreUsuario = localStorage.getItem('usuario') || 'Usuario';
  }
}
