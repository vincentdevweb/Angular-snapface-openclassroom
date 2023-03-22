import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router){}
  onAddNewFaceSnap() : void {
this.router.navigateByUrl('facesnaps/create')
  }

}
