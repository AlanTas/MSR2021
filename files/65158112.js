export class EmployeeAddFormComponent implements OnInit {

  @Input()
  displayNewEmployeeDialog: boolean;
  @Output
  onDialogClose: EventEmitter<any> = new EventEmitter(); 

  //.. 

  closeDialog() {
    this.onDialogClose.emit();
  }

}
