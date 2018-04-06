$(document).ready(function () {

    $('#button-id').attr('disabled', true);


    // $('#button-id').click(function () {
    //     content = $("#input-field").val();
    //     alert(content);
    // });


    $('#input-field').on('input', function () {
        let inputField = $('#input-field').val();
        if (inputField.length >= 1) {
            $('#button-id').attr('disabled', false);
        } else {
            $('#button-id').attr('disabled', true);
        };

    });

    $('body').append('<div id="div-id"></div>');
    $('#div-id').append(`<ul id="ul-id"</ul>`);

    $('#button-id').click(function (event) {
        event.preventDefault();
        target = $('#h2-id');
        content = $("#input-field").val();
        $('#ul-id').append(`<li id="li-id">${content}</li>`);

        // $('li').mouseover(function (event) {
        //     $(event.currentTarget).css({
        //         'background-color': 'red',
        //         'border-radius': '3rem'
        //     });
        // });

        $('li').click(function (event) {
            $(event.currentTarget).css({
                'background-color': getRandomColor(),
                'border-radius': '3rem'
            });
        });

        $('li').dblclick(function (event) {
            $(event.currentTarget).remove();
        });
    });

    function getRandomColor() {
        let randColor = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
        return randColor;
    }




});