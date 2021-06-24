function validateSortCode(executionContext) {
    
    var formContext = executionContext.getFormContext();
    
    var sortcode = formContext.getAttribute("sortcodee").getValue();
    
    var errorId = "error";
    
    if(sortcode != "")
    
    {
        var sortcoderegex = /^(\d){2}-(\d){2}-(\d){2}$/;
        if(sortcoderegex.test(sortcode) == false)
        {
            formContext.ui.setFormNotification("Please ensure correct format of Sort Code i.e. 12-34-56", "ERROR", errorId);

formContext.getAttribute("sortcodee").setValue("");

        }
        else
        {

formContext.ui.clearFormNotification(errorId);

        }
   }
}
