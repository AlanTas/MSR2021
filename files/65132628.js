import { Component } from '@angular/core';
import { products } from './products';
import { GridDataResult, PageChangeEvent, SelectAllCheckboxState } from '@progress/kendo-angular-grid';

@Component({
    selector: 'my-app',
    template: `
        {{isBoxEnabled}}
        <kendo-grid
            [data]="gridView"
            [pageSize]="pageSize"
            [skip]="skip"
            [pageable]="true"
            (pageChange)="pageChange($event)"
            [height]="500"
            [selectable]="{enabled: true, checkboxOnly: true }"
            (selectionChange)="selectionChange($event)"
            kendoGridSelectBy="ProductID">
            <kendo-grid-checkbox-column [width]="80">
                <ng-template kendoGridHeaderTemplate>
                    <input class="k-checkbox" id="selectAllCheckboxId" kendoGridSelectAllCheckbox >
                    <label class="k-checkbox-label" for="selectAllCheckboxId">Text</label>
                </ng-template>
            </kendo-grid-checkbox-column>
            <kendo-grid-column field="ProductName" title="Product Name" [width]="300"></kendo-grid-column>
            <kendo-grid-column field="UnitsInStock" title="Units In Stock"></kendo-grid-column>
            <kendo-grid-column field="UnitsOnOrder" title="Units On Order"></kendo-grid-column>
            <kendo-grid-column field="ReorderLevel" title="Reorder Level"></kendo-grid-column>
        </kendo-grid>
    `
})
export class AppComponent {
    public gridView: GridDataResult;
    public items: any[] = products;
    public mySelection: number[] = [];
    public selectAllState: SelectAllCheckboxState = 'unchecked';
    public pageSize = 10;
    public skip = 0;

    public isBoxEnabled = false;

    constructor() {
        this.loadItems();
    }


    public pageChange(event: PageChangeEvent): void {
        this.skip = event.skip;
        this.loadItems();
    }

    private loadItems(): void {
        this.gridView = {
            data: this.items.slice(this.skip, this.skip + this.pageSize),
            total: this.items.length
        };
    }
    
    public selectionChange(e) {
      const selectedRowIndices = e.selectedRows.map(row => row.index)
      const deselectedRowIndices = e.deselectedRows.map(row => row.index)
      this.mySelection = this.mySelection.concat(selectedRowIndices)
      this.mySelection = this.mySelection.filter(selection => !deselectedRowIndices.includes(selection))
      this.isBoxEnabled = this.mySelection.length > 0
    }
}
