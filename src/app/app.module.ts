import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
 import { AngularFireAuth } from '@angular/fire/compat/auth';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabase } from 'angularfire2/database';
// import {AngularFireAuth} from 'angularfire2/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddemployeeComponent } from './components/addemployee/addemployee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditemployeeComponent } from './components/editemployee/editemployee.component';
import { EmployeeInfoComponent } from './components/employee-info/employee-info.component';
import { EmployeesComponent } from './components/employees/employees.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { EmployeeService } from './services/employee.service';
import { environment } from '../environments/environment';

// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// import { library } from '@fortawesome/fontawesome-svg-core';
// import { fas } from '@fortawesome/free-solid-svg-icons';
// library.add(fas);

import { FormsModule } from '@angular/forms';

import { FlashMessagesModule } from 'flash-messages-angular';
import {AuthService} from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import {SettingsService} from './services/settings.service';
import { RegisterGuard } from './guards/register.guard';

const appRoutes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate:[RegisterGuard]},
  { path: 'add-employee', component: AddemployeeComponent, canActivate:[AuthGuard]},
  { path: 'employee/:id', component: EmployeeInfoComponent, canActivate:[AuthGuard]},
  { path: 'edit-employee/:id', component: EditemployeeComponent, canActivate:[AuthGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'settings', component: SettingsComponent, canActivate:[AuthGuard]},
  { path: '**', component: PageNotFoundComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    AddemployeeComponent,
    DashboardComponent,
    EditemployeeComponent,
    EmployeeInfoComponent,
    EmployeesComponent,
    LoginComponent,
    NavbarComponent,
    PageNotFoundComponent,
    RegisterComponent,
    SettingsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule.forRoot()
  ],

  providers: [    
    AngularFireAuth,
    AngularFireDatabaseModule,
    EmployeeService,
    AuthService,
    AuthGuard,
    SettingsService,
    RegisterGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
