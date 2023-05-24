import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorRegistrationService {

  //Local URL
  //url="http://localhost:8080";

  //Prod URL
  url='http://fransalonapp-env-1.eba-mv3mavpj.ap-northeast-1.elasticbeanstalk.com';


  constructor(private http: HttpClient) { }

  vendorRegistration(data: any){
    return this.http.post(`${this.url}/register`,data);
  }
}
