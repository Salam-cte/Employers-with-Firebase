import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, pipe} from 'rxjs';
import { map } from 'rxjs/operators';
import { transpileModule } from 'typescript';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(
    public router: Router,
    public afAuth: AngularFireAuth,
  ) { }


  canActivate(): Observable<boolean> {
        return this.afAuth.authState.pipe(map(auth =>{
            if(!auth){
                this.router.navigate(['/login']);
                return false;
            } else {
                return true;
            }
        }));
  }

}
