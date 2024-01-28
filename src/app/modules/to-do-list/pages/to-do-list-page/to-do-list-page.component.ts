import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToDoListCardComponent } from '../../components/to-do-list-card/to-do-list-card.component';
import { ToDoListCardModel } from '../../shared/to-do-list-card.model';

@Component({
  selector: 'app-to-do-list-page',
  templateUrl: './to-do-list-page.component.html',
  styleUrls: ['./to-do-list-page.component.scss']
})
export class ToDoListPageComponent implements OnInit {
  @ViewChild(ToDoListCardComponent) toDoListCardComponent: ToDoListCardComponent;

  public allTaskEntries: ToDoListCardModel[] = [];

  constructor(
  ) { }

  ngOnInit(): void {
  }

  public onSuccessAddEntries() {
    this.toDoListCardComponent.ngOnInit();
  }

}
