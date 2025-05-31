import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { RegisterComponent } from './pages/register/register.component';
import { AccountSummaryComponent  } from './pages/account-summary/account-summary.component';
import { ForgotPasswordComponent  } from './pages/forgot-password/forgot-password.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'Register', component: RegisterComponent},
  { path: 'AccountSummary', component: AccountSummaryComponent},
  { path: 'ForgotPassword', component: ForgotPasswordComponent}

];
