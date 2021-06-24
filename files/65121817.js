$("#picker1").colorPick({
            'initialColor': '#8e44ad',
            'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
            'onColorSelected': function () {
                console.log("The user has selected the color: " + this.color)
                this.element.css({ 'backgroundColor': this.color, 'color': this.color });
                $("#UsColor").val(this.color);
                return this.color;
            }
        });

$("#picker1").colorPick({
            'initialColor': '#8e44ad',
            'palette': ["#1abc9c", "#16a085", "#2ecc71", "#27ae60", "#3498db", "#2980b9", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#f1c40f", "#f39c12", "#e67e22", "#d35400", "#e74c3c", "#c0392b", "#ecf0f1"],
            'onColorSelected': function () {
                console.log("The user has selected the color: " + this.color)
                this.element.css({ 'backgroundColor': this.color, 'color': this.color });
               $.ajax({
                type: "POST",
                   url: '@Url.Action("ChangeColor", "Test")',
                   data: { "color": this.color }
                 }).done(function (data) {

                });
                return this.color;
            }
        });
