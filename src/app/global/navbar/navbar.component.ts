import { Component, OnInit, Input } from '@angular/core';
import { SignoutService } from '../../authentication/signout/signout.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn: Boolean;

  constructor(
    private signoutService: SignoutService,
  ) { }

  ngOnInit() { }

  signout() {
    this.signoutService.signOut()
    .subscribe(
      result =>{
        this.signoutService.announceSignOut();
        console.log(result);
      },
      err => {
        console.log(err.error);
      }
    );
  }
}
