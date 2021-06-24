    deleteUser = document.getElementById("deleteBtn")
    
    
    deleteUser.addEventListener('click', function() {
            let allUsers;
            const xhr = new XMLHttpRequest();
            xhr.responseType = "json"
        
            xhr.addEventListener("readystatechange", function() {
            if(this.readyState === 4) {
                allUsers = this.response;
          
                
              let currentUser = JSON.parse(localStorage.getItem("currentUser"))
    
                allUsers = allUsers.filter(allUser => allUser.username !== currentUser.username);
    
            } });
                           
    
            xhr.open("DELETE", "http://localhost:2500/deleteProfile", true);
                
            xhr.setRequestHeader("Content-Type", "application/json");
                
          
            xhr.send(JSON.stringify(allUser));
        })

