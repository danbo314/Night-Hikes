/**
 * Created by dan on 11/26/16.
 */

$(function () {
    $('.icon-menu').click(function () {
        $('#nav-menu').toggle();
    });

    $('#accordion').on('click', '.title', function () {
        $('#accordion').find('.selected').removeClass('selected');
        $('#accordion') .find('.content').css({ height: 0 });

        var newH;

        switch($(this).parent('li').attr('id')) {
            case 'liner':
                newH = 300;
                break;
            case 'album':
                newH = 520;
                break;
            case 'bio':
                newH = 500;
                break;
            case 'photos':
                newH = 1300;
                break;
            case 'youtube':
                newH = 520;
                break;
            default:
                newH = 200;
                break;
        }

        $(this).addClass('selected');
        $(this).siblings('.content').css({ height: newH });
    });
});