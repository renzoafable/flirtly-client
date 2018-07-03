import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SigninService } from './signin/signin.service';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SigninComponent, SignupComponent],
  providers: [SigninService],
  exports: [SigninComponent]
})
export class AuthenticationModule { }
