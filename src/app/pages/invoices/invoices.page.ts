import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular'

@Component({
  selector: 'app-invoices',
  templateUrl: './invoices.page.html',
  styleUrls: ['./invoices.page.scss'],
})
export class InvoicesPage implements OnInit {
  features: any[] = [
    {id: 1, name: 'Today Invoice', src: 'https://cdn-icons-png.flaticon.com/512/5240/5240016.png', background: 'rgba(27,150,181, 0.1)', page: ''},
    {id: 2, name: 'Today Payment', src: 'https://cdn-icons-png.flaticon.com/512/726/726488.png', background: 'rgba(106,100,255, 0.1)', page: ''},
    {id: 3, name: 'This Month Invoice', src: 'https://cdn-icons-png.flaticon.com/512/4166/4166029.png', background: 'rgba(255, 196, 9, 0.1)', page: ''},
    {id: 4, name: 'This Month Payment', src: 'https://cdn-icons-png.flaticon.com/512/4108/4108042.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  ];

  transactions: any[] = [
    {id: 1, vendor: 'INV-8756456', image: '', amount: 1500, time: '3:00PM'},
    {id: 2, vendor: 'INV-354566', image: '', amount: -1200, time: '4:00PM'}
  ];


  constructor(public menu: MenuController,private nav: NavController) { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(true, 'main');
    this.menu.enable(false, 'main1');
  }
}
