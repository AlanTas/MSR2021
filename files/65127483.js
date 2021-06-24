function exportHTML(){    
    // Add inputs values to the document before it rendered:
    var inputs = document.querySelectorAll('input');
    for (var i=0; i < inputs.length; i++) {
        let ps = document.createElement('p');
        document.getElementById("source-html").appendChild(ps)
        ps.textContent = inputs[i].value;
    }

    // continue with your code
   var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "+
        "xmlns:w='urn:schemas-microsoft-com:office:word' "+
        "xmlns='http://www.w3.org/TR/REC-html40'>"+
        "<head><meta charset='utf-8'><title>Export HTML to Word Document with JavaScript</title></head><body>";
   var footer = "</body></html>";
   var sourceHTML = header+document.getElementById("source-html").innerHTML+footer;
   
   var source = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(sourceHTML);
   var fileDownload = document.createElement("a");
   document.body.appendChild(fileDownload);
   fileDownload.href = source;
   fileDownload.download = 'document.doc';
   fileDownload.click();
   document.body.removeChild(fileDownload);
}
<body>
<div class="source-html-outer">
    <div id="source-html">
        <h1>
            <center>Artificial Intelligence</center>
        </h1>
        <h2>Overview</h2>
        <p>
            Artificial Intelligence(AI) is an emerging technology
            demonstrating machine intelligence. The sub studies like <u><i>Neural
                    Networks</i>, <i>Robatics</i> or <i>Machine Learning</i></u>
            are the parts of AI. This technology is expected to be a
            prime part of the real world in all levels.
        </p>        
        
    </div>
    <div class="content-footer">
        <!-- move this form the div you convert to DOC-->
        <input type="text" value="123456" />
        <input type="text" value="123456" style="margin-left: 150px;"/>
        <button id="btn-export" onclick="exportHTML();">Export to word
            doc</button>
    </div>
</div>