import {Component, OnInit} from '@angular/core';
import {activities} from '../../activities';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities = activities;

  constructor() {
  }

  ngOnInit(): void {
  }

}
