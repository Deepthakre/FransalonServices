import { Component , NgZone} from '@angular/core';
import { Storage } from '@ionic/storage';
import { AuthService } from './service/auth.service'; 
import { Router } from '@angular/router';
import { Network } from '@capacitor/network';
import { PluginListenerHandle } from '@capacitor/core';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  networkListner: PluginListenerHandle;
  status: boolean;
  model={};

  constructor(private storage: Storage,private authService:AuthService,private router:Router,private ngZone:NgZone) {}

  async ngOnInit() {
    
    await this.storage.create();
    this.networkListner=await Network.addListener('networkStatusChange',status=>{
      console.log('Network status changed ',status);
      this.ngZone.run(()=>{
        this.changeStatus(status);

      })
    });
  

    const status = await Network .getStatus();
    console.log('Network status:',status);
    this.changeStatus(status);
    console.log('Network status:',this.status);

  }

  changeStatus(status) {
    this.status = status?.connected;
    if (!this.status) {
      this.model = {
        background: 'assets/errors.webp',
        title: 'No Connection',
        subtitle: 'your internet connection was',
        description: 'interrupted, Please retry.',
        titleColor: 'dark',
        color: 'medium',
        button: 'RETRY',
        buttonColor: 'dark'

      };
      this.ngOnDestroy();
    }
  }
  z
  checkStatus(event) {
    this.ngOnInit();
  }

  ngOnDestroy(): void {
    if (this.networkListner) this.networkListner.remove();
  }




 
  getLogout(){
    console.log('Inside logout');
    this.storage.remove('access_token');
    
    this.router.navigateByUrl('/wel');
  }
  

  
  // logout(){
  //   this.authService.getLogout(); 
  //   this.router.navigateByUrl('/login');
  // }
}
