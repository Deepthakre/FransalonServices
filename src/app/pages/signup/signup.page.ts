import { Component, OnInit } from '@angular/core';
import { VendorRegistrationService } from 'src/app/service/vendor-registration.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {


  public errorMessage: string;

  data={
    gstNo:'',
    storeName:'',
    storeAddress:'',
    emailId:'',
    name:'',
    dob:'',
    gender:'',
    homeAddress:'',
    password:'',
    mobileNo:'',
    alternateMobileNo:'',
    role:'',
    storePhotoUrl:'',
    displayPicUrl:'',
    storeType:'',
    storeCategory:'',
    aadharNo:'',
    panNo:'',
    salesReportMonthly:'',
    salesReportQuarterly:'',
    salesReportAnnually:'',
    revenueReportMonthly:'',
    revenueReportQuarterly:'',
    revenueReportAnnually:'',
    bankName:'',
    accountNo:'',
    ifscCode:'',
    branch:''
   };

  constructor(private vendorRegistrationService: VendorRegistrationService,private toastController: ToastController) { }

  ngOnInit() {
  }

  doSubmitForm(){
    console.log('Try to submit form');
    console.log('DATA ',this.data);

    if(this.data.emailId==='' || this.data.password==='')
    {
      this.presentToast('Fields can not be empty');

    }else{
    this.vendorRegistrationService.vendorRegistration(this.data).subscribe(
      response=>{
        console.log(response);
        this.presentToast('Vendor Successfully Registered');
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
