import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { StatisticsComponent } from './home/statistics/statistics.component';
import { InterestsComponent } from './home/interests/interests.component';
import { MatchfinderComponent } from './home/matchfinder/matchfinder.component';
import { MessagesComponent } from './messages/messages.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, StatisticsComponent, InterestsComponent, MatchfinderComponent, MessagesComponent]
})
export class PagesModule { }
