$(".error").each(function(index, element) {
      $(this).css('cursor', 'pointer');
      $(this).mouseover(function() {
        if ($(this).has('.popup-base').length > 0) {
          return;
        }
        var popup = document.createElement('div');
        popup.className = 'popup-base';
        let correctionslist = element.getAttribute('suggestions').split(',');
        for (correct of correctionslist) {
          popup.innerHTML += '<span class="listitem">' + correct + ' </span>';
        }

        $(this).append(popup);

      });
     });
.error {
  background-color: yellow;
  position: relative;
  display: inline-block;
}

.popup-base {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.error:hover .popup-base {
  display: block;
}

.listitem {
  display:block;
  margin:7px 0;
}

.listitem:hover {
  background-color:blue;
  color:white;
}