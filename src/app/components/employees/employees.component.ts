import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../Employee';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
  employees: Employee[] = [];
  totalEmployees: number | undefined;
  totalSalarySum:number | undefined;
  constructor(
    public employeeService: EmployeeService,
    public router:Router
    ) {

   }

  ngOnInit(): void {
    this.employeeService.getEmployees().valueChanges().subscribe((employees: any) => {
    this.employees = employees;
    this.getTotalEmployees();
  })}

  getTotalEmployees(){
    let total = 0;
    let totalSalary = 0;
    for (let index = 0; index < this.employees.length; index++){
       total += 1;
       totalSalary += parseFloat(this.employees[index].salary.toString());
    }
    this.totalEmployees = total;
    this.totalSalarySum = totalSalary;
    console.log(this.totalEmployees);
    console.log(this.totalSalarySum);
  }

}
