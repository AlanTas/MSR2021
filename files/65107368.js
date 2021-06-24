<div *ngFor="let form of myForm.controls;">
    <ng-container [formGroup]="form">
      <div>
        <label>Name</label
        ><input type="text" required formControlName="firstName" />
      </div>
      <span class="text-danger" *ngIf="isInValidFormControl(form,'firstName')">
        Name is required
      </span>
      <div>
        <label>Value</label><input type="text" formControlName="value" />
      </div>
    </ng-container>
</div>
