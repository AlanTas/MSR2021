    <form [formGroup]="myForm">
          <div class="checkbox">
            <label for="waiting"> waiting </label>
            <input class="input-control checkbox-box" formControlName="isTest" 
              [attr.disabled]="myForm.get('isTimed').value|| null"
              name="waiting" id="waiting"
              type="checkbox">
          </div>
    
          <div class="checkbox">
            <label for="functional"> functional </label>
            <input class="input-control checkbox-box" formControlName="isFunctional" 
              [attr.disabled]="myForm.get('isTimed').value || null"
              name="functional" id="functional"
              type="checkbox">
          </div>
    
          <div class="checkbox">
            <label for="test"> test </label>
            <input class="input-control checkbox-box" formControlName="isTimed" name="test" 
             [attr.disabled]="(myForm.get('isTest').value && myForm.get('isFunctional').value) || null" 
             id="test" type="checkbox">
          </div>
    
    </form>

   combineLatest(
      this.myForm.get("isTest").valueChanges.pipe(startWith(this.myForm.value.isTest)),
      this.myForm.get("isFunctional").valueChanges.pipe(startWith(this.myForm.value.isFunctional)),
      this.myForm.get("isTimed").valueChanges.pipe(startWith(this.myForm.value.isTimed))
    )
      .subscribe(([isTest, isFunctional, isTimed]: [any, any, any]) => {
        const timedCtr = this.myForm.get("isTimed");
        const testCtr = this.myForm.get("isTest");
        const functionalCtr = this.myForm.get("isFunctional");
        if (isTimed) {
          testCtr.disable({ emitEvent: false });
          functionalCtr.disable({ emitEvent: false });
          testCtr.setValue(false, { emitEvent: false });
          functionalCtr.setValue(false, { emitEvent: false });
        } else {
          testCtr.enable({ emitEvent: false });
          functionalCtr.enable({ emitEvent: false });
        }
        if (isTest && isFunctional) {
          timedCtr.disable({ emitEvent: false });
           timedCtr.setValue(false, { emitEvent: false });
        } else timedCtr.enable({ emitEvent: false });
      });
  }
