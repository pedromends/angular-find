import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { formatDate } from '@angular/common';
import { Router } from '@angular/router';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

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

  private _liveAnnouncer = inject(LiveAnnouncer);
  tasks: any[] = [];
  newUser = { name: '', email: '' };
  editTask: any = null;
  formsData = new MatTableDataSource<any>([]); 
  displayedColumns: string[] = ['title', 'description', 'status', 'dateCreation', 'dateUpdate', 'actions'];
  @ViewChild(MatSort) sort!: MatSort;

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
      this.formsData.sort = this.sort;
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

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}
