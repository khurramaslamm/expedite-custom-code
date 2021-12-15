$(function() {
    $(document).on('scroll', function() {
        var top = $(document).scrollTop();
        console.log(top);

        if (top > 700 && top < 1151 || top < 1151 && top > 700  ) {
            $('.text-column').addClass('sticky-top');
        } else if(top>1100){
            $('.text-column').removeClass('fix-text-column');
        }
    });

    //     var lastScrollTop = 0;
    // $(window).scroll(function(event){
    //    var st = $(this).scrollTop();
    //    if (st > lastScrollTop){
    //        console.log(st);
    //    } else {
    //       console.log(st);
    //    }
    //    lastScrollTop = st;
    // });

});