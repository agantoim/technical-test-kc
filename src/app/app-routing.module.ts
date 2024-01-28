import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'to-do-list-page'
  },
  {
    path: 'to-do-list-page',
    loadChildren: () =>
      import('../app/modules/to-do-list/to-do-list.module').then(
        (module) => module.ToDoListModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
