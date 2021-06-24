var savestart = false;   
$("#jqGrid").jqGrid({
    beforeSubmitCell : function( id, name, val, irow,icol) {
        savestart = true;
    },
    afterSubmitCell : function() {
        savestart = false; 
        return [true,""];
    },
    ....
 });
