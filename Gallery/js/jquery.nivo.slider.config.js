
    $(window).load(function() {
        $('#slider').nivoSlider({
        effect: 'fold',
            slices: 15,
            animSpeed: 300,
            pauseTime: 4000,
            directionNav: true, //Next & Prev
            directionNavHide: false, //Only show on hover
            controlNav: false, //1,2,3...
            pauseOnHover: false, //Stop animation while hovering
            beforeChange: function() { },
            afterChange: function() { }
        });
    });
