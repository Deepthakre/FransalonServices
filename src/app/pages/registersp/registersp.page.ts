/* eslint-disable @typescript-eslint/naming-convention */
// import { SpregisterService } from 'src/app/services/spregister.service';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

 import { SpregisterService } from 'src/app/services/spregister.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registersp',
  templateUrl: './registersp.page.html',
  styleUrls: ['./registersp.page.scss'],
})
export class RegisterspPage implements OnInit {
  public errorMessage: string;

  data={
   
    name:'',
    dob:'',
    contact:'',
    email:'',
    password:'',
    
    gender:''
    
  
     
    
    
   };
 


  constructor(private SpregisterService:SpregisterService,private toastController: ToastController,private router: Router) { }
  ngOnInit() {
  }

  doSubmitForm(){
    console.log('Try to submit form');
    console.log('DATA ',this.data);

    if(this.data.email==='' || this.data.password==='')
    {
      this.presentToast('Fields can not be empty');

    }else{
    this.SpregisterService.Spregister(this.data).subscribe(
      response=>{
        console.log(response);
        this.presentToast('Sp Successfully Registered');
        this.router.navigateByUrl('/wel');
    },
      error=>{

        console.log('Error from server : ' + error);
        this.presentToast(error);
       }

    );
  }
  }

  async presentToast(msg: string) {
     const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     });
    await toast.present();
  }


}
