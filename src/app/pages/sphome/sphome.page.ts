import { Component, OnInit } from '@angular/core';
import {  MenuController,NavController } from '@ionic/angular';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sphome',
  templateUrl: './sphome.page.html',
  styleUrls: ['./sphome.page.scss'],
})
export class SphomePage implements OnInit {
  userName = '';
  todos: any;

  slider: any;
    slideOptions = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };

  constructor(public menu: MenuController,private authService: AuthService,private router: Router, private nav: NavController) { }

  ngOnInit() {
  }
  afterLoggedIn(){
    this.authService.getTodos().subscribe(
      (data) => {
        console.log('Milgya Bhai : ',data);
        this.todos = data.name;
      },
      (error) => {
        alert('failed fetch todos');
      }
    );
  }


  logout(){
    this.authService.getLogout();
    this.router.navigateByUrl('/login');
  }
  // ---------------------enable slideMenu-------------------

//  // ionViewWillEnter() {
//     this.menuCtrl.enable(true);
//    }

  //  ------------------------------Sliding Images in homepage-----------------

   slideChanged()
   {
      this.slider.stopAutoplay();
      }
      ionViewDidEnter() {
        // Use the id to enable/disable the menus
        this.menu.enable(false, 'main');
        this.menu.enable(true, 'main1');
      }

}
