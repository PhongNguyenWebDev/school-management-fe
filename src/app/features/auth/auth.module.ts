import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routes';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes),
    LoginComponent,
    ProfileComponent,
    LogoutComponent,
  ],
})
export class AuthModule {}
