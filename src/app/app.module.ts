import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BuglistComponent } from './buglist/buglist.component';
import { BugcreationComponent } from './bugcreation/bugcreation.component';
import { BugupdateComponent } from './bugupdate/bugupdate.component';
import { CreatebugComponent } from './createbug/createbug.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewbugComponent } from './newbug/newbug.component';


@NgModule({
  declarations: [
    AppComponent,
    BuglistComponent,
    BugcreationComponent,
    CreatebugComponent,
    BugupdateComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NewbugComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
