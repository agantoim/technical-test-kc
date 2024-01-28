import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskGroupingModel } from '../../shared/task-grouping.model';
import { ToDoListCardModel, tasksModel } from '../../shared/to-do-list-card.model';
import { StorageService } from '../../shared/storage.service';

@Component({
  selector: 'app-to-do-list-form',
  templateUrl: './to-do-list-form.component.html',
  styleUrls: ['./to-do-list-form.component.scss']
})
export class ToDoListFormComponent implements OnInit {
  @Output()
  public addEntriesEventEmitter: EventEmitter<any> = new EventEmitter<any>();

  public openFormButtonState: boolean;
  public showFormState: boolean;
  public todoListForm: FormGroup;
  public taskGrouping: TaskGroupingModel[] = [];
  public allTaskEntries: ToDoListCardModel[] = [];

  constructor(
    private fb: FormBuilder,
    private storageService: StorageService
  ) { }

  ngOnInit(): void {
    this.openFormButtonState = true;
    this.showFormState = false;
    this.initTodoListForm();
  }

  private initTodoListForm() {
    this.todoListForm = this.fb.group({
      title: ['', Validators.required],
      address: [''],
    })

    const taskInitial: TaskGroupingModel = {
      fieldName: 'Task',
      formControlName: 'task1',
    }

    this.todoListForm.addControl(taskInitial.formControlName, new FormControl('', [Validators.required]));
    this.taskGrouping.push(taskInitial);
  }

  public get title() {
    return this.todoListForm.get('title');
  }

  public get address() {
    return this.todoListForm.get('address');
  }

  public onClickAddFormButton() {
    this.openFormButtonState = false;
    this.showFormState = true;
  }

  public onClickCloseFormButton() {
    this.openFormButtonState = true;
    this.showFormState = false;
  }

  public onClickNewTaskButton() {
    const taskGroupingLength = this.taskGrouping.length;
    const newTask: TaskGroupingModel = {
      fieldName: 'Task',
      formControlName: 'task' + (taskGroupingLength + 1),
    }

    this.todoListForm.addControl(newTask.formControlName, new FormControl('', [Validators.required]));
    this.taskGrouping.push(newTask);
  }

  public onClickAddEntriesButton() {
    if (this.todoListForm.valid) {
      const newTaskEntries = new ToDoListCardModel(
        this.title?.value,
        this.address?.value,
        []
      );

      this.taskGrouping.forEach((task) => {
        const taskValue: tasksModel = {
          taskName: this.todoListForm.get(task.formControlName)?.value,
          isChecked: false
        };
        newTaskEntries.tasks.push(taskValue);
      })

      let currentEntriesInStorage: ToDoListCardModel[] = [];
      currentEntriesInStorage = this.storageService.getAllTaskEntries();

      if (currentEntriesInStorage.length > 0) {
        this.allTaskEntries = currentEntriesInStorage;
        this.allTaskEntries.push(newTaskEntries);
        this.storageService.storeAllTaskEntries(this.allTaskEntries);
      } else {
        this.allTaskEntries.push(newTaskEntries);
        this.storageService.storeAllTaskEntries(this.allTaskEntries);
      }
      this.addEntriesEventEmitter.emit();
      this.todoListForm.reset();
      this.taskGrouping = [];
      this.initTodoListForm();
    }
  }
}
