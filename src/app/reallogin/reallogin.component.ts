import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reallogin',
  templateUrl: './reallogin.component.html',
  styleUrls: ['./reallogin.component.css']
})
export class RealloginComponent {

  constructor(private router:Router){}

  onSubmit(){
    this.router.navigate(['/createbug']);
  }
  onSubmitRegistration(){
    this.router.navigate(['/registration']);
  }

}
