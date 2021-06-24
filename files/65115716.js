// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            /// here is where the behaviour needs to be added //////////
            if (openDropdown.classList.contains('show') &&
                ($(event.target).hasClass('menubtns'))) {

                openDropdown.classList.remove('show');
                console.log('you have clicked an option');

            } else {
                console.log('not clicked on an option')
                openDropdown.classList.remove('show');
                mainpageaccessibility();

            }
        }
    }
}
