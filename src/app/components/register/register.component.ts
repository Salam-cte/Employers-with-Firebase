import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from  'flash-messages-angular';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string | any;
  password: string | any;

  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }


  mySubmit(){
    this.authService.register(this.email, this.password).
    then((res) => {
      this.flashMessagesService.show('Registered Successfully !!',
      {cssClass: 'alert-success',timeout:6000});
      this.router.navigate(['/']);
    }).catch((err) => {
     this.flashMessagesService.show('Incorrect Username or Password!!',
     {cssClass: 'alert-danger',timeout:6000});
     this.router.navigate(['/register']);
    })
}

}
