import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy, Component, Inject, inject, Input} from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss']
})
export class DialogDeleteComponent {

  @Input() id:number = 0; 

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogDeleteOpen, {
      data: {id: this.id}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-delete-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDeleteOpen {
  
  constructor(private taskService: TasksService, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  deleteTask() {
    const taskId = this.data.id;
    this.taskService.deleteTask(taskId).subscribe((response) => {
      window.location.reload()
    });
  }
}