import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from  'flash-messages-angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
// import 'rxjs/add/operator/map';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogIn: boolean = false;
  isUserLogin: string = "";
  enableRegister:boolean | any = true;

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public authService: AuthService,
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.authService.getAuth().subscribe((auth: { email: string; }) => {
      if(auth){
        this.isLogIn=true;
        this.isUserLogin=auth.email;
      } else {
        this.isLogIn=false;
      }
    });

  this.enableRegister = this.settingsService.getSettings().isRegisterOpen;
  }


  onLogoutClick(){
      this.authService.logout();
      this.flashMessagesService.show('You are Logged out!',
      {cssClass: 'alert-success',timeout:6000});
      this.router.navigate(['/login']);
  }

}
