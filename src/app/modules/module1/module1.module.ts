import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { Module1RoutingModule } from './module1-routing.module';
import { CalendarComponent } from './calendar/calendar.component';
import { MatInputModule } from '@angular/material/input';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { HoursComponent } from './hours/hours.component';
import {MatTableModule} from '@angular/material/table';
import { ComponentsModule } from '../components/components.module';


@NgModule({
  declarations: [
    CalendarComponent,
    AppointmentListComponent,
    HoursComponent
  ],
  imports: [
    CommonModule,
    Module1RoutingModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatTableModule,
    ComponentsModule
  ],
})
export class Module1Module { }
