import {Component, OnInit} from '@angular/core';
import {participants} from '../../participants';

@Component({
  selector: 'app-participants-list',
  templateUrl: './participants-list.component.html',
  styleUrls: ['./participants-list.component.css']
})
export class ParticipantsListComponent implements OnInit {
  participants = participants;
  // tslint:disable-next-line:typedef
  share() {
    window.alert('Current participant has been notified!');
  }
  constructor() { }

  ngOnInit(): void {  }
}
