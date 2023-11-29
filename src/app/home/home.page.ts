import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';  // Asegúrate de importar NavController
import { MenuController } from '@ionic/angular';  // Asegúrate de importar MenuController

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private navCtrl: NavController, private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  irAPagina() {
    this.navCtrl.navigateForward('/folder.module');
    this.menuCtrl.close();  // Cierra manualmente el menú después de la navegación
  }
}