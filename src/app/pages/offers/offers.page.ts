import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  UData: any;
  slider: any;
  imageData:any;
    slideOptions = {
    initialSlide: 1,
    slidesPerView: 1,
    autoplay: true
  };
loading:boolean=false;
  slideOpts = {
    slidesPerView: 2.2,
  };
  constructor( private http:HttpClient,private nav: NavController,public menu: MenuController,


    ) { }

  ngOnInit() {
    this.http.get(' http://demo2421825.mockable.io/offerlist').subscribe((Data: any=[])=>{
      console.log(Data);
      this.UData=Data;
  
  });
  
}
 
slideChanged()
   {
      this.slider.stopAutoplay(); //this code for slide after page change
      }
ionViewDidEnter() {
  // Use the id to enable/disable the menus
  this.menu.enable(true, 'main');
  this.menu.enable(false, 'main1');
}
}