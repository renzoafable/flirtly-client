import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import { FormsModule } from '@angular/forms';
import { SigninService } from './signin/signin.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SigninComponent],
  providers: [SigninService],
  exports: [SigninComponent]
})
export class AuthenticationModule { }
