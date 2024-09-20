import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks/tasks.service';

export interface FormsData {
  type: string;
  title: number;
  details: number;
  date: string;
  time: number;
}

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {

  tasks: any[] = [];
  newUser = { name: '', email: '' };
  editTask: any = null;
  formsData:any[] = []
  displayedColumns: string[] = ['title', 'description', 'status', 'dateCreation', 'dateUpdate', 'actions'];

  constructor(private taskService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  seeDetails(element:any){
    console.log(element)
  }

  loadUsers() {
    this.taskService.getAllTasks().subscribe((data:any) => {
      console.log(data)
      this.formsData = data;
    });
  }

  addUser() {
    this.taskService.createTask(this.newUser).subscribe(() => {
      this.loadUsers();
      this.newUser = { name: '', email: '' };
    });
  }

  updateUser() {
    this.taskService.updateTask(this.editTask).subscribe(() => {
      this.loadUsers();
      this.editTask = null;
    });
  }

  deleteUser(id: number) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.loadUsers();
    });
  }

  formatDate(date:any){
    return formatDate(date, 'dd-MM-yyyy', 'en');
  }

  edit(a:any){
    this.router.navigate(['/hours-edit'], {queryParams: {date: this.formatDate(a.date)}});
  }

  deleted(a:any) {
    if (confirm("Quer MESMO deletar este registro?") == true) {
      this.taskService.deleteTask(a).subscribe((response) => {
        console.log(response)
      });
      alert('Deletado com sucesso')
    } else {
      alert('Operação cancelada')
    }

    this.router.navigate(['/'])
  }
}
