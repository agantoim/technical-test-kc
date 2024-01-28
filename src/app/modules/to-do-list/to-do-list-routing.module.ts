import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoListPageComponent } from './pages/to-do-list-page/to-do-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: ToDoListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToDoListRoutingModule { }
