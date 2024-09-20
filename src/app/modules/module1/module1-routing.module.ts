import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HoursComponent } from './hours/hours.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'task-list', component: AppointmentListComponent },
  { path: 'hours-edit', component: HoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
