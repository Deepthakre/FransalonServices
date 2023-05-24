import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
@Component({
  selector: 'app-serviceslist',
  templateUrl: './serviceslist.page.html',
  styleUrls: ['./serviceslist.page.scss'],
})
export class ServiceslistPage implements OnInit {

  constructor(public menu: MenuController,private nav: NavController


    ) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(true, 'main');
    this.menu.enable(false, 'main1');
  }
  public data = ['Hair Care  ', 'Body Massage', 'Pre-Bridal Grooming', 'Facials', 'Threading', 'Hair Cut', 'Manicure ', 'Pedicure', "nail treatments","tanning"," colouring and styling"," Bleach"];
  public results = [...this.data];

  handleChange(event) {
    const num = event.target.value.toLowerCase();
    this.results = this.data.filter(d => d.toLowerCase().indexOf(num) > -1);
  }
}
  

