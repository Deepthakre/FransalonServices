import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule,FormGroup,FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Storage } from '@ionic/storage';
import {AuthService} from './service/auth.service';
import {HttpClientModule} from '@angular/common/http';
import { AuthTokenInterceptor } from './interceptors/auth.token.interceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { ErrorsComponent } from './errors/errors.component';
import { ComponentsModule } from './errors/component.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,   HttpClientModule, IonicModule.forRoot(), AppRoutingModule,ComponentsModule,ReactiveFormsModule,FormsModule],
  providers: [Storage, AuthService,ErrorsComponent, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthTokenInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
