import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-editemployee',
  templateUrl: './editemployee.component.html',
  styleUrls: ['./editemployee.component.css']
})
export class EditemployeeComponent implements OnInit {
  isSalaryEditable:boolean | any;
  constructor(
    public settingsService:SettingsService
  ) { }

  ngOnInit(): void {




    this.isSalaryEditable = this.settingsService.getSettings().isSalaryEditable;
    //Change the name in the component HTML disableSalaryEdit
  }


}
