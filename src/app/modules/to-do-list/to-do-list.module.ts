import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToDoListRoutingModule } from './to-do-list-routing.module';
import { ToDoListPageComponent } from './pages/to-do-list-page/to-do-list-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToDoListFormComponent } from './components/to-do-list-form/to-do-list-form.component';
import { ToDoListCardComponent } from './components/to-do-list-card/to-do-list-card.component';


@NgModule({
  declarations: [
    ToDoListPageComponent,
    ToDoListFormComponent,
    ToDoListCardComponent
  ],
  imports: [
    CommonModule,
    ToDoListRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule
  ]
})
export class ToDoListModule { }
