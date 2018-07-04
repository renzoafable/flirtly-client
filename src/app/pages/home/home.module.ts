import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics/statistics.component';
import { MatchfinderComponent } from './matchfinder/matchfinder.component';
import { InterestsComponent } from './interests/interests.component';
import { HomeService } from './home.service';
import { HomeComponent } from './home.component';
import { InterestComponent } from './interests/interest/interest.component';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    StatisticsComponent,
    MatchfinderComponent,
    InterestsComponent,
    InterestComponent,
  ],
  providers: [
    HomeService,
    CookieService
  ],
  exports: [InterestComponent]
})
export class HomeModule { }
