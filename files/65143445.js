<div class="flex-container">
  <div class="download">
    <span>Download</span>
    // your icon here
  </div>

 <div class="print">
    <span>Print</span>
    // your icon here
 </div>
</div>

flex-container {
    display: flex;
    }

    .download, 
    .print {
    border: 2px solid blue;
    display: inline-block;
    align-items: center;
    }
    .print{
      margin-left:-6px;
    }
