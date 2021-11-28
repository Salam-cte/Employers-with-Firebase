import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import { transpileModule } from 'typescript';
import { SettingsService } from '../services/settings.service';

@Injectable()
export class RegisterGuard implements CanActivate {


  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
    public settingsService: SettingsService
  ) { }


  canActivate(): boolean {
     if (this.settingsService.getSettings().isRegisterOpen){
         return true;
     } else {
         this.router.navigate(['/login']);
         return false;
     }
  }

}
