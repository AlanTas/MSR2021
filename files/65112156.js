<td>
    input  type="checkbox" id="vehicle2" name="vehicle2" 
      (change)="addCheckValue(i,list.isTicked)"
      [checked]="list.isTicked"
      [disabled]="list.isDisabled">
  </td>


  <td *ngIf="list.isDisabled">
            Already disabled
    </td>



addCheckValue(index,isChecked){
    if(isChecked === undefined){
      isChecked = true
    }
    this.listes[index].isTicked = isChecked;

  }



//disabled checked boxes on close 
this.listes = this.listes.map(e => {
      if (e.isTicked === true) {
        e.isDisabled = true;
      }
      return e;
});
