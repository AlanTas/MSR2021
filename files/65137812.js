<h2>Create .txt file</h2>
<div>
   <label for="fname">File name (without .txt):</label>
   <br>
   <input type="text" id="fname" name="fname"><br><br>
   <label for="fcontent">File Content:</label>
   <br>
   <textarea id="fcontent" name="w3review" rows="4" cols="50"></textarea>
   <br>
   <button id="create">Create File</button>
   <a download="info.txt" id="downloadlink" style="display: none">Download Here</a>
</div>

(function() {
    var textFile = null,
        makeTextFile = function(text) {
            var data = new Blob([text], {
                type: 'text/plain'
            });

            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }

            textFile = window.URL.createObjectURL(data);

            return textFile;
        };


    var create = document.getElementById('create');
    var fileContent = document.getElementById("fcontent");

    create.addEventListener('click', function() {
        const fileName = document.getElementById("fname").value;
        document.getElementById("downloadlink").setAttribute("download", fileName);
        var link = document.getElementById('downloadlink');
        link.href = makeTextFile(fileContent.value);
        link.style.display = 'block';
    }, false);
})();
