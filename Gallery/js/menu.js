

 $(document).ready(function() {
 //To switch directions up/down and left/right just place a "-" in front of the top/left attribute
 //Vertical Sliding
 $('.boxgrid1, .boxgrid2, .boxgrid3, .boxgrid4, .boxgrid5, .boxgrid6, .boxgrid7').hover(function() {
 $(".cover", this).stop().animate({ top: '-35px' }, { queue: false, duration: 200 });
 }, function() {
 $(".cover", this).stop().animate({ top: '0px' }, { queue: false, duration: 400 });
 });
});
