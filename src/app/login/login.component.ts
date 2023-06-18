import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username:any;
  password:any;

  constructor(private router:Router){}
  onSubmit(){
    this.router.navigate(['/reallogin']);
  }
}


