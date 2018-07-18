import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TitleComponent } from './global/title/title.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './global/navbar/navbar.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './pages/home/home.module';
import { MessagesModule } from './pages/messages/messages.module';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthenticationModule,
    HomeModule,
    MessagesModule
  ],
  exports: [
    TitleComponent,
    NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
