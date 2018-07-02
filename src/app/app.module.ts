import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { TitleComponent } from './global/title/title.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './global/navbar/navbar.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { PagesModule } from './pages/pages.module';

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
    PagesModule
  ],
  exports: [
    TitleComponent,
    NavbarComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
