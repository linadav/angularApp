import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-participant-alerts',
  templateUrl: './participant-alerts.component.html',
  styleUrls: ['./participant-alerts.component.css'],
  providers: [DatePipe]
})
export class ParticipantAlertsComponent implements OnInit {

  @Input() participant;
  // constructor() { }
  currentDate = new Date();
  constructor(private datePipe: DatePipe){
    // @ts-ignore
    this.currentDate = this.datePipe.transform(this.currentDate, 'yyyy-MM-dd');
  }
  ngOnInit(): void {
  }


}
