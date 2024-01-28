import { Injectable } from "@angular/core";
import { ToDoListCardModel } from "./to-do-list-card.model";

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  public clear(): void {
    localStorage.clear();
  }

  public storeTaskEntries(list: ToDoListCardModel): void {
    localStorage.setItem('entries', JSON.stringify(list));
  }

  public storeAllTaskEntries(list: ToDoListCardModel[]): void {
    localStorage.setItem('allEntries', JSON.stringify(list));
  }

  public getTaskEntries(): ToDoListCardModel {
    return JSON.parse(localStorage.getItem('entries') || '{}');
  }

  public getAllTaskEntries(): ToDoListCardModel[] {
    return JSON.parse(localStorage.getItem('allEntries') || '{}');
  }
}
