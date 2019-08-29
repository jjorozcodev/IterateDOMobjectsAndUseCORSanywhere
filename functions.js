function GetDataList() {
    var myUrl = 'http://yosoyjj-001-site1.btempurl.com/api/Estudiantes';
    var proxy = 'https://cors-anywhere.herokuapp.com/';

    var finalURL = proxy + myUrl;
    // GET usando AJAX y JQuery
    $.get(finalURL).done(function (resp) {

        $.each(resp, function () {

            $("#dataCards").append(
                '<div class="col-md-3 mt-3">'
                + '<div class="card">'
                + '<div class="card-body">'
                + '<h5 class="card-title">' + this.NombreCompleto + '</h5>'
                + '<h6 class="card-subtitle mb-2 text-muted">ID: ' + this.NumCarnet + '</h6>'
                + '<label class="btn btn-default">'
                + 'Selected?:&emsp;'
                + '<input data-idE="' + this.Id + '" type="checkbox" autocomplete="off">'
                + '</label>'
                + '</div>'
                + '</div>'
                + '</div>'
            );

        });

        loadSelectedItems();

    }).fail();
}

function loadSelectedItems() {
    var selectedItems = [1, 3, 5, 7, 10];

    var inpts = $("#dataCards :input");

    selectedItems.forEach(function (item) {
        for (let elem of inpts) {
            var id = $(elem).attr('data-idE');

            if (id === item.toString()) {
                $(elem).attr('checked', 'checked');
            }
        };

    });
}
