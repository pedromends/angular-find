import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { MainTableComponent } from '../components/table/main-table/main-table.component';

const routes: Routes = [
  { path: '', component: CalendarComponent },
  { path: 'task-list', component: MainTableComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Module1RoutingModule { }
