import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import { CalendarServiceService } from 'src/app/services/calendar/calendar-service.service';
import { ActivatedRoute } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  constructor(
    private calendarService: CalendarServiceService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activities = this.calendarService.get()
    this.activatedRoute.queryParams.subscribe((params) => {
      this.date = params['date'];
    });
    console.log(this.activities)
  }

  date = 0
  activities: any[] = []
  hours = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ]

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    moveItemInArray(this.hours, event.previousIndex, event.currentIndex);

    for(let i = 0; i < this.activities.length; i++){
      console.log(this.date)
      console.log(this.formatDate(this.activities[i].date))
      console.log(parseInt(this.activities[i].time))
      if(this.formatDate(this.activities[i].date) == this.formatDate(this.date) && parseInt(this.activities[i].time) == event.previousIndex){
        this.activities[i].time = event.currentIndex
        this.calendarService.put(this.activities)
      }
    }
  }

  formatHours(date:any){
    return formatDate(date, 'hh:mm', 'en')
  }

  formatDate(date:any){
    return formatDate(date, 'yyyy-MM-dd', 'en')
  }

  verify(hour:any){
    for(let i = 0; i < this.activities.length; i++){
      if(this.formatDate(this.activities[i].date) == this.formatDate(this.date)){
        if(parseInt(hour) == parseInt(this.activities[i].time)){
          return `${this.activities[i].title} - ${this.activities[i].time}`
        }
      }
    }
    return null;
  }
}
