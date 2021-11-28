import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

import { Observable } from 'rxjs';
import { Employee } from '../Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

  employees:AngularFireList<any[]>;
  // changes Employee to employee here
  employee: AngularFireObject<any> | undefined;

  constructor(public af: AngularFireDatabase ) { 
    this.employees = this.af.list('/employees') as AngularFireList<Employee[]>;
  }

  getEmployees(){
    return this.employees;
  }

  addEmployee(employee: Employee | any ){
    return this.employees.push(employee);
  }



  getEmployee(id:string){
    this.employee = this.af.object('/employees/'+id) as 
    AngularFireObject<Employee>;
    return this.employee;
  }

  deleteEmployee(id:string){
    return this.employees.remove(id);
  }

  

}
