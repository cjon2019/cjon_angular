import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { 
  MatToolbarModule, 
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';

import { AuthService } from './services/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JobsService } from './services/jobs.service';
import { JobsIndexComponent } from './components/jobs/jobs-index/jobs-index.component';
import { JobsDetailComponent } from './components/jobs/jobs-detail/jobs-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { IndexComponent } from './components/index/index.component';
import { SummaryComponent } from './components/jobs/summary/summary.component';
import { FinancesComponent } from './components/jobs/finances/finances.component';

const routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { 
    path: 'jobs', canActivate: [AuthGuard] , children: [
      { path: '', component: JobsIndexComponent },
      { path: 'detail/:id', component: JobsDetailComponent },
    ]
  },
  { path: '**', component: IndexComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    JobsIndexComponent,
    JobsDetailComponent,
    IndexComponent,
    SummaryComponent,
    FinancesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [
    AuthService,
    JobsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
