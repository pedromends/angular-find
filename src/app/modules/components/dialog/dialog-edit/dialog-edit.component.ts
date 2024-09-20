import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {ChangeDetectionStrategy, Component, Inject, inject, Input} from '@angular/core';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  styleUrls: ['./dialog-edit.component.scss']
})
export class DialogEditComponent {

  @Input() task:any = null; 

  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogEditOpen, {
      data: {task: this.task}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-edit-content.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatDatepickerModule, MatInputModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogEditOpen {

  public form: FormGroup = new FormGroup({
    id: new FormControl(null, [Validators.required]),
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    status: new FormControl(null, [Validators.required]),
    dateCreation: new FormControl(null, [Validators.required]),
    dateUpdate: new FormControl(null, [Validators.required]),
  });

  constructor(private taskService: TasksService, @Inject(MAT_DIALOG_DATA) public data: any, private router: Router) { }

  ngOnInit() {
    console.log(this.data.task)
    this.form.get('title')?.setValue(this.data.task.title)
    this.form.get('description')?.setValue(this.data.task.description)
    this.form.get('status')?.setValue(this.data.task.status)
    this.form.get('dateCreation')?.setValue(this.data.task.dateCreation)
    this.form.get('dateUpdate')?.setValue(this.data.task.dateUpdate)
  }

  public saveChanges(){
    this.form.get('dateUpdate')?.setValue(this.form.get('dateCreation')?.value)
    this.form.get('id')?.setValue(this.data.task.id)

    this.taskService.updateTask(this.form.value).subscribe((response) => {
      console.log(response)
      alert('Saved successfully')
    })

    this.form.get('title')?.setValue('')
    this.form.get('description')?.setValue('')
    this.form.get('status')?.setValue('')
    this.form.get('dateCreation')?.setValue('')
    this.form.get('dateUpdate')?.setValue('')

    this.router.navigate(['/task-list']);
  }
  
  editTask() {
    const taskId = this.data.id;
    this.taskService.updateTask(taskId).subscribe((response) => {
      this.router.navigate(['/'])
    });
  }
}