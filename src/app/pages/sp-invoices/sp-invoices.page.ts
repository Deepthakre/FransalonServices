import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-sp-invoices',
  templateUrl: './sp-invoices.page.html',
  styleUrls: ['./sp-invoices.page.scss'],
})
export class SpInvoicesPage implements OnInit {

  constructor(public menu: MenuController,private nav: NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(false, 'main');
    this.menu.enable(true, 'main1');
  }
}
