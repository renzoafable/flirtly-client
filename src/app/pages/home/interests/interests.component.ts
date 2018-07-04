import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Interest } from '../../../models';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.css'],
})
export class InterestsComponent implements OnInit {
  interests: Interest[];
  interestsToBeAdded: string;

  constructor(
    private homeService: HomeService
  ) { }

  ngOnInit() {
    this.homeService.getUserInterests().subscribe(
      result => {
        this.interests = result.data;
      },
      err => {
        console.log(err.error);
      }
    );
  }

  setInterests(interests) {
    const newInterests = [...this.interests, ...interests];
    this.interests = newInterests;
  }

  addInterests() {
    this.homeService.addInterest(this.interestsToBeAdded).subscribe(
      result => {
        this.setInterests(result.data);
      },
      err => {

      }
    )
  }
}
