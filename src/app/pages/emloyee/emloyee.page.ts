import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-emloyee',
  templateUrl: './emloyee.page.html',
  styleUrls: ['./emloyee.page.scss'],
})
export class EmloyeePage implements OnInit {

  constructor(public menu: MenuController,private nav: NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(true, 'main');
    this.menu.enable(false, 'main1');
  }
}
