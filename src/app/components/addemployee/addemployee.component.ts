import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee';
import { FlashMessagesService } from  'flash-messages-angular';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {
  [x: string]: any;
  employee: Employee | any = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    city: "",
    phone: 0,
    salary: 0
  }

  disableSalary:boolean | any = false;

  constructor(public flashMessagesService: FlashMessagesService,
              public router: Router,
              public employeeService: EmployeeService,
              public settingsService:SettingsService) { 

  }

  ngOnInit(): void {
    this.disableSalary = this.settingsService.getSettings().disableSalary;
  }

  mySubmit({value, valid}:{value:Employee, valid:any}): void{
    if(this.disableSalary){
    value.salary=0;
    }

    if (!valid){
      this.flashMessagesService.
      show('Please input correct Info',{cssClass:'alert-danger',timeout:6000});
      this.router.navigate(['add-employee']);
      // console.log("Not Correct Data");
    }else {
      this.employeeService.addEmployee(value);
      this.flashMessagesService.
      show('Added new employee successfully!',{cssClass:'alert-success',timeout:6000});
      this.router.navigate(['/']);
      // console.log(this.employee);
    }
  }

}
