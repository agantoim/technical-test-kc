import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ToDoListCardModel, tasksModel } from '../../shared/to-do-list-card.model';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-to-do-list-card',
  templateUrl: './to-do-list-card.component.html',
  styleUrls: ['./to-do-list-card.component.scss']
})
export class ToDoListCardComponent implements OnInit {

  public allTaskEntries: ToDoListCardModel[] = [];

  constructor(
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.getEntriesFromStorage();
  }

  public getEntriesFromStorage() {
    let storedEntries: ToDoListCardModel[] = [];
    storedEntries = this.storageService.getAllTaskEntries();
    this.allTaskEntries = storedEntries;
  }

  public onCheckboxClicked(task: tasksModel, cardIndex: number) {
    task.isChecked = !task.isChecked;
    this.allTaskEntries[cardIndex].tasks = [...this.allTaskEntries[cardIndex].tasks];
    this.storageService.storeAllTaskEntries(this.allTaskEntries);
  }
}
