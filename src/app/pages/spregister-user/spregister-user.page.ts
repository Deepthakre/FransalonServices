import { Component, OnInit } from '@angular/core';
import { MenuController,NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { RegisterUserService } from 'src/app/services/register-user.service';
@Component({
  selector: 'app-spregister-user',
  templateUrl: './spregister-user.page.html',
  styleUrls: ['./spregister-user.page.scss'],
})
export class SpregisterUserPage implements OnInit {
  public errorMessage: string;

  data={


    name:'',
    dob:'',
    mobileNo:'',
    emailId:'',
    password:'',
    confpass:'',
    gender:'',
   }
  constructor(public menu:MenuController,private nav: NavController, private toastController: ToastController,private RegisterUserService:RegisterUserService) { }

  ngOnInit() {
  }
  doSubmitForm(){
    console.log("Try to submit form");
    console.log("DATA ",this.data);

    if(this.data.emailId=='' || this.data.password=='')
    {
      this.presentToast("Fields can not be empty");

    }else{
    this.RegisterUserService.RegisterUserService(this.data).subscribe(
      response=>{
        console.log(response);
        this.presentToast("Successfully Registered");
    },
      error=>{

        console.log("Error from server : " + error);
        this.presentToast(error);
    }
    )
  }
  }

  async presentToast(msg) {
     const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     });
    await toast.present();
  }






  ionViewDidEnter() {
    // Use the id to enable/disable the menus
    this.menu.enable(false, 'main');
    this.menu.enable(true, 'main1');
  }
}
