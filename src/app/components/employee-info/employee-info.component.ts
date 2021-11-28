import { Component, OnInit } from '@angular/core';
import { Employee } from '../../Employee';
import { EmployeeService } from '../../services/employee.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  id:string = "";
  employee:Employee [] | any = [];
  hasSalary:boolean = false;
  updateSalary:boolean = false;

  constructor(
    public employeeService: EmployeeService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public flashMessagesService: FlashMessagesService
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).valueChanges().subscribe((employee): void =>{
      if(employee.salary>0){
        this.hasSalary=true;
      }
      this.employee = employee;
      console.log(this.employee);
    });
  }

  myDelete(){
    if(confirm("Are you sure! :(")){
      this.employeeService.deleteEmployee(this.id);
      this.flashMessagesService.show("Employee Deleted Successfully!"),
      {cssClass:'alert-success', timeout:6000};
      this.router.navigate(['/']);
    }
  }



  updateSalaryInput(){

  }

}
