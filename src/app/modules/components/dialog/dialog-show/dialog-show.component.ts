import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy, Component, Inject, inject, Input} from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-show',
  templateUrl: './dialog-show.component.html',
  styleUrls: ['./dialog-show.component.scss']
})
export class DialogShowComponent {
  @Input() task:any = null ;

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteOpen, {
      data: {task: this.task}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

    console.log(this.task)
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-show-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDeleteOpen {
  task: any = null

  constructor(private taskService: TasksService, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) {
    this.task =  this.data.task
  }

  deleteTask() {
    const taskId = this.data.id;
    this.taskService.deleteTask(taskId).subscribe((response) => {
      this.router.navigate(['/'])
    });
  }
}