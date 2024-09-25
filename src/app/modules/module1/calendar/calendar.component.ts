import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks/tasks.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private taskService: TasksService, private router: Router) { }

  ngOnInit(): void {
  }

  public form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    dateCreation: new FormControl(null, [Validators.required]),
    dateUpdate: new FormControl(null, [Validators.required]),
  });

  public save(){
    this.form.get('dateUpdate')?.setValue(this.form.get('dateCreation')?.value)
    
    this.taskService.createTask(this.form.value).subscribe((response) => {
      alert('Salvo com sucesso')
    })
    this.router.navigate(['/task-list']);
    window.location.reload()

    // this.form.get('title')?.setValue('')
    // this.form.get('description')?.setValue('')
    // this.form.get('status')?.setValue('')
    // this.form.get('dateCreation')?.setValue('')
    // this.form.get('dateUpdate')?.setValue('')
  }

  public update(data:any){
    this.taskService.updateTask(this.form.value)
  }

  formatDate(date:any){
    return formatDate(date, 'yyyy-MM-dd', 'en');
  }
}
