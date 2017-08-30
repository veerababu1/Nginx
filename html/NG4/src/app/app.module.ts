import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';

import {JobService} from './services/job.service';
import {UserService} from './services/user.service';
import { HomeComponent } from './home/home.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import {PhoneFormat} from './pipes/phoneformat';
import { RestrictedCharactersDirective } from './directive/restricted-characters.directive';
import { DatepickerDirective } from './datepicker.directive';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoComponent,
    LoginComponent,
    RegistrationComponent,
    JobListComponent,
    JobDetailsComponent,
    HomeComponent,
    DropdownComponent,
    PhoneFormat,
    RestrictedCharactersDirective,
    DatepickerDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{path:"home",component:HomeComponent},{path:"login",component:LoginComponent},{path:"register",component:RegistrationComponent},
      {path:"jobs",component:JobListComponent,children:[{path:"jobDetails",component:JobDetailsComponent}]
      }]),
    HttpModule
  ],
  providers: [JobService,
               UserService
              ],
  bootstrap: [AppComponent]
})
export class AppModule {  }
