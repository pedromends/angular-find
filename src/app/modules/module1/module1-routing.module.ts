import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { HoursComponent } from './hours/hours.component';
import { TestComponent } from '../components/dialog/test/test.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'task-list', component: TestComponent },
  { path: 'hours-edit', component: HoursComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
