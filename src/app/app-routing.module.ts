import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { MessagesComponent } from './pages/messages/messages.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, runGuardsAndResolvers: 'always' },
  { path: 'signup', component: SignupComponent, runGuardsAndResolvers: 'always' },
  { path: 'messages', component: MessagesComponent, runGuardsAndResolvers: 'always' },
  { path: '', redirectTo: '/signup', pathMatch: 'full' },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})]
})

export class AppRoutingModule { }
