import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createbug',
  templateUrl: './createbug.component.html',
  styleUrls: ['./createbug.component.css']
})
export class CreatebugComponent {
  constructor(private router:Router){}
  onSubmit(){
    this.router.navigate(['/']);
  }
}
