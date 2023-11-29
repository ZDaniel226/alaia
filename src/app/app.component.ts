import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'trophy' },
    { title: 'Iniciar sesion', url: '/menu', icon: 'key' },
    { title: 'Home', url: '/home', icon: 'home' },

  ];
  constructor() {}
}
