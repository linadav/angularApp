import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParticipantsListComponent } from './participants-list/participants-list.component';
import {RouterModule} from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { ParticipantAlertsComponent } from './participant-alerts/participant-alerts.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantsListComponent,
    ActivitiesComponent,
    ParticipantAlertsComponent
  ],
  imports: [
    BrowserModule,
    // RouterModule
    RouterModule.forRoot([
      { path: '', component: ParticipantsListComponent },
      { path: 'activities', component: ActivitiesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
