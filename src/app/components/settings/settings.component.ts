import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from  'flash-messages-angular';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SettingsService } from '../../services/settings.service';
import { Settings } from '../../Settings';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
    settings: Settings | any;
  constructor(
    public flashMessagesService: FlashMessagesService,
    public router: Router,
    public settingsService: SettingsService
  ) { }

  ngOnInit(): void {
    this.settings = this.settingsService.getSettings();
  }

  mySubmit(){
    this.settingsService.changeSettings(this.settings);
    this.flashMessagesService.show("Saved Successfully!", 
    {cssClass:'alert-success', timeout:3000});
    this.router.navigate(['/settings']);
  }

}
