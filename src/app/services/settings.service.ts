import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { Settings } from '../Settings';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  settings:Settings = {
    isRegisterOpen:true,
    disableSalary:true,
    isSalaryEditable:false
  }

  constructor() {
    if(localStorage.getItem('settings')!= null){
      // this.settings = JSON.parse(localStorage.getItem('settings'));
    }
   }

  getSettings(): Settings {
    return this.settings;
    }

  changeSettings(settings:Settings){
      localStorage.setItem('settings', JSON.stringify(settings));
    }

}