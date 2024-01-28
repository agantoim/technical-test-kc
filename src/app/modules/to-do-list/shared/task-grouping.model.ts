export class TaskGroupingModel {
  fieldName: string;
  formControlName: string;

  constructor(
    fieldName: string,
    formControlName: string
  ) {
    this.fieldName = fieldName;
    this.formControlName = formControlName;
  }
}
