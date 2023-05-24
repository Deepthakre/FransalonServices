import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),

  },
  {
    path: '',
    redirectTo: 'wel',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule),
   // canActivate:[AuthGuard]
  },
  // {
  //   path: 'dashbord',
  //   loadChildren: () => import('./pages/dashbord/dashbord.module').then( m => m.DashbordPageModule)
  // },
  {
    path: 'registersp',
    loadChildren: () => import('./pages/registersp/registersp.module').then( m => m.RegisterspPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'invoices',
    loadChildren: () => import('./pages/invoices/invoices.module').then( m => m.InvoicesPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'serviceslist',
    loadChildren: () => import('./pages/serviceslist/serviceslist.module').then( m => m.ServiceslistPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'offers',
    loadChildren: () => import('./pages/offers/offers.module').then( m => m.OffersPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'emloyee',
    loadChildren: () => import('./pages/emloyee/emloyee.module').then( m => m.EmloyeePageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'marketing',
    loadChildren: () => import('./pages/marketing/marketing.module').then( m => m.MarketingPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'report',
    loadChildren: () => import('./pages/report/report.module').then( m => m.ReportPageModule),
    // canActivate:[AuthGuard]
  },
  {
    path: 'wel',
    loadChildren: () => import('./pages/wel/wel.module').then( m => m.WelPageModule)
  },
  
  {
    path: 'splogin',
    loadChildren: () => import('./pages/splogin/splogin.module').then( m => m.SploginPageModule)
  },
  {
    path: 'sphome',
    loadChildren: () => import('./pages/sphome/sphome.module').then( m => m.SphomePageModule)
  },
  {
    path: 'spregister-user',
    loadChildren: () => import('./pages/spregister-user/spregister-user.module').then( m => m.SpregisterUserPageModule)
  },
  {
    path: 'sp-qr-scanner',
    loadChildren: () => import('./pages/sp-qr-scanner/sp-qr-scanner.module').then( m => m.SpQrScannerPageModule)
  },
  {
    path: 'sp-invoices',
    loadChildren: () => import('./pages/sp-invoices/sp-invoices.module').then( m => m.SpInvoicesPageModule)
  },
  {
    path: 'sp-service-list',
    loadChildren: () => import('./pages/sp-service-list/sp-service-list.module').then( m => m.SpServiceListPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/forgot/forgot.module').then( m => m.ForgotPageModule)
  },
   
  {
    path: 'addservice',
    loadChildren: () => import('./pages/addservice/addservice.module').then( m => m.AddservicePageModule)
  },
  {
    path: 'creat',
    loadChildren: () => import('./creat/creat.module').then( m => m.CreatPageModule)
  },
  {
    path: 'add-new-task',
    loadChildren: () => import('./add-new-task/add-new-task.module').then( m => m.AddNewTaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('./update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  },
  {
    path: 'spadd-task',
    loadChildren: () => import('./spadd-task/spadd-task.module').then( m => m.SpaddTaskPageModule)
  },
  {
    path: 'spcreate-task',
    loadChildren: () => import('./spcreate-task/spcreate-task.module').then( m => m.SpcreateTaskPageModule)
  },
  {
    path: 'spupdate-task',
    loadChildren: () => import('./spupdate-task/spupdate-task.module').then( m => m.SpupdateTaskPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
