import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsRoutingModule } from './components-routing.module';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    RouterModule
  ],
  exports: [
    NavbarComponent
  ]
})
export class ComponentsModule { }
