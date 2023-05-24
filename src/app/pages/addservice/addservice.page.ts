import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-addservice',
  templateUrl: './addservice.page.html',
  styleUrls: ['./addservice.page.scss'],
})
export class AddservicePage implements OnInit {
  isModalOpen = false;
  data={
   
   
    product:'',
    price:'',
    discount:'',
    net:'',
    
     
};
       constructor(private toastController: ToastController,private router: Router){}
setOpen(isOpen: boolean) {
  this.isModalOpen = isOpen;
}
   
Submit(){
  if(this.data.net==='' || this.data.product==='')
  {
     alert ('Fields can not be empty');

  }else{
       this.cancel();
    this.presentToast(' Successfully  ');
 
   console.log(this.data)
 
  }

   }

   cancel(){
    this.isModalOpen = false;
    this.router.navigateByUrl('/serviceslist');
   }
  async presentToast(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
     });
    await toast.present();
  }
  
 

  ngOnInit() {
  }
  

}
