import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular'
@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss'],
})
export class MarketingPage implements OnInit {

  constructor(private nav: NavController,public menu: MenuController,) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(true, 'main');
    this.menu.enable(false, 'main1');
  }
}
