import { ForgotService } from 'src/app/services/forgot.service';
 
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
 
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  Router: any;
  // show = false;
  //  email;
  // password;
  public errorMessage: string;
  data={
    email:'',
    password:''
  }
  
  constructor(private toastController:ToastController, private router:Router,private ForgotService:ForgotService) { }

  
 

  // onClick() {
  //   if (this.password === 'password') {
  //     this.password = 'text';
  //     this.show = true;
  //   } else {
  //     this.password = 'password';
  //     this.show = false;
  //   }
  // }
  
  data1= {
    emailId:'',
    password:'',
    confirmpas:''
  };
  ngOnInit() {
 
  }
  logini(){
    console.log(this.data1);
     
    {
      if((this.data1.emailId=='' || this.data1.password=='' )){
        //alert('login success');
        alert('login failed');
        this.presentToast('Please Enter Valid Credentials');
      
         
      }
      else if((this.data1.password != this.data1.confirmpas)){
        this.presentToast('Password not match');

      }
      else{
        this.ForgotService.ForgotService(this.data1).subscribe(
          response=>{
            console.log(response);
            this.presentToast('  password change sucessfully');
            this.router.navigateByUrl('/login');
        },
          error=>{
    
            console.log('Error from server : ' + error);
            this.presentToast(error);
           }
    
        );
      }
    }
  }


 async presentToast(msg) {

  const toast = await this.toastController.create({
    message: msg,
    duration: 2000,

  });

  await toast.present();
}

}
