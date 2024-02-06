import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  paginas = [
    {titulo: 'Recargas', path: 'pages/recargas'},
    {titulo: 'Listado', path: 'pages/listado'},
    {titulo: 'Mi perfil', path: 'pages/login'},
  ]
}
