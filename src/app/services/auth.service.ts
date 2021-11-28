import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, of, pipe} from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth) {}
  login(email: string,  password: string){
    return new Promise((resolve,reject) => {
     this.afAuth.signInWithEmailAndPassword(email, password)
     .then((userData: unknown)=> resolve(userData),(err: any)=>reject(err));
    });
  }

  getAuth(): any{
    return this.afAuth.authState.pipe(map((auth: any): any => auth));
  }

  logout(){
    this.afAuth.signOut();
  }

  register(email: string,  password: string){
    return new Promise((resolve,reject) => {
     this.afAuth.createUserWithEmailAndPassword(email, password)
     .then((user: unknown)=> resolve(user),(err: any)=>reject(err));
    });
  }
  
}