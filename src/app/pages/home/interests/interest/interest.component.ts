import { Component, OnInit, Input } from '@angular/core';
import { Interest } from '../../../../models';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  @Input() interest;
  @Input() iter;

  styles = [
    'label label-default',
    'label label-primary',
    'label label-success',
    'label label-info',
    'label label-warning',
    'label label-danger'
  ];

  constructor() { }

  ngOnInit() { }

}
