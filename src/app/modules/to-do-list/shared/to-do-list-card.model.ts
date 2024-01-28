export class ToDoListCardModel {
  public title: string;
  public address: string;
  public tasks: tasksModel[];

  constructor(title: string, address: string, tasks: tasksModel[]) {
    this.title = title;
    this.address = address;
    this.tasks = tasks;
  }
}

export class tasksModel {
  public taskName: string;
  public isChecked: boolean;

  constructor(taskName: string, isChecked: boolean) {
    this.taskName = taskName;
    this.isChecked = isChecked;
  }
}
