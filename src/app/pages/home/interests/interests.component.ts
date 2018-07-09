import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Interest } from '../../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  addClicked: boolean = false;
  isGettingInterests: boolean;
  interests: Interest[] = [];
  interestsToBeAdded: string;
  interestDeletedSubscription: Subscription;

  constructor(
    private homeService: HomeService
  ) { 
    this.interestDeletedSubscription = this.homeService.interesDeleted$.subscribe(
      interestDeleted => {
        this.homeService.getUserInterests().subscribe(
          result => {
            this.interests = result.data;
          },
          err => {
            console.log(err.error);
          }
        )
      }
    )
  }

  ngOnInit() {
    this.isGettingInterests = true;
    this.homeService.getUserInterests().subscribe(
      result => {
        this.interests = result.data;
        this.isGettingInterests = false;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  toggleIcon() {
    this.addClicked = !this.addClicked;
  }

  setInterests(interests) {
    const newInterests = [...this.interests, ...interests];
    this.interests = newInterests;
  }

  addInterests() {
    this.homeService.addInterest(this.interestsToBeAdded).subscribe(
      result => {
        this.homeService.getUserInterests().subscribe(
          result => {
            this.interests = result.data;
          },
          err => {
            console.log(err.error);
          }
        )
      },
      err => {
        console.log(err.error);
      }
    )
  }
}
