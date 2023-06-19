import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatebugComponent } from './createbug/createbug.component'
import { LoginComponent } from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {BuglistComponent} from './buglist/buglist.component'
import { RealloginComponent } from './reallogin/reallogin.component';
import { BugupdateComponent } from './bugupdate/bugupdate.component';
import { BugcreationComponent } from './bugcreation/bugcreation.component';
import { NewbugComponent } from './newbug/newbug.component';


const routes: Routes = [
  // {path:'',redirectTo:'dashboard',pathMatch:'full'},
  {path:'',component:DashboardComponent},
  {path:'reallogin', component: RealloginComponent},
  {path:'registration', component: LoginComponent},
  {path:'routetobuglist', component: BuglistComponent},
  {path:'login', component: CreatebugComponent},
  {path:'createbug', component: CreatebugComponent},
  {path:'bugupdate', component:BugupdateComponent},
   {path:'routetocreation', component:BugcreationComponent},
   {path:'routetocreatebugfromsave', component:CreatebugComponent},
   {path:'routetonewbug',component:NewbugComponent}
   
   
   
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }