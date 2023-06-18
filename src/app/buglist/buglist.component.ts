import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buglist',
  templateUrl: './buglist.component.html',
  styleUrls: ['./buglist.component.css']
})
export class BuglistComponent {

  constructor(private router:Router){}

  onSubmit(){
    this.router.navigate(['/bugupdate']);
  }

}
