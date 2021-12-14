$(function() {

    $(document).on('scroll', function() {
        var top = $(document).scrollTop();
        console.log(top);

        if (top > 700 && top < 1100) {
            $('.text-column').addClass('fix-text-column');
        } else if(top>1100){
            $('.text-column').addClass('fix-text-column-end');
            $('.text-column').removeClass('fix-text-column');
        }
        else if(top > 1050 && top < 1499){
            $('.text-column').removeClass('fix-text-column-end');
        }
    });

});