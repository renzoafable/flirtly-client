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
import { PendingConnectionsComponent } from './pending-connections/pending-connections.component';
import { SentConnectionsComponent } from './sent-connections/sent-connections.component';
import { ConnectionsComponent } from './connections/connections.component';

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
    PendingConnectionsComponent,
    SentConnectionsComponent,
    ConnectionsComponent,
  ],
  providers: [
    HomeService,
    CookieService
  ],
  exports: [InterestComponent]
})
export class HomeModule { }
