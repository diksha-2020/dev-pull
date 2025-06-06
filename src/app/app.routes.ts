import { Routes } from '@angular/router';
import { BodyComponent } from '../components/body/body.component';
import { SignupComponent } from '../components/signup/signup.component';
import { LoginComponent } from '../components/login/login.component';
import { ProfileComponent } from '../components/profile/profile.component';

export const  routes: Routes = [
    {
      path: '',
      component: BodyComponent,
      children: [
        { path: 'signup', component: SignupComponent},
        { path: 'login', component: LoginComponent},
        { path: 'profile', component: ProfileComponent},
      ]
    },
    {path: '**', redirectTo: ''} // Redirect any unknown paths to the root
  ];

