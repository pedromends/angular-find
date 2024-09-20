import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogDeleteComponent } from './dialog/dialog-delete/dialog-delete.component';
import { MatDialogModule} from '@angular/material/dialog';
import { DialogEditComponent } from './dialog/dialog-edit/dialog-edit.component';
import { DialogShowComponent } from './dialog/dialog-show/dialog-show.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    NavbarComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogShowComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    NavbarComponent,
    DialogDeleteComponent,
    DialogEditComponent,
    DialogShowComponent
  ]
})
export class ComponentsModule { }
