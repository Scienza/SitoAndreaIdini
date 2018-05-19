(function () {
  var ul = $("#navs"), li = $("#navs li"), i = li.length + 1, n = i, r = 180, dur = 150;
  ul.click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      for (var a = -1; a <= i; a++) {
        if (a == -1 || a == i)
          continue;
        li.eq(a - 1).addClass("menu-li-shown").removeClass("menu-li-hidden").css({
          'transition-delay': "" + (dur * a) + "ms",
          '-webkit-transition-delay': "" + (dur * a) + "ms",
          'left': (r * Math.cos(90 / n * a * (Math.PI / 90))),
          'top': (r * Math.sin(90 / n * a * (Math.PI / 90)))
        });
      }
    } else {
      for (var a = i; a >= 0; a--) {
        if (a == 0 || a == i)
          continue;
            $(li).eq(a - 1).css({
                'transition-delay': "" + (dur * (i - a)) + "ms",
                '-webkit-transition-delay': "" + (dur * (i - a)) + "ms",
                'left': (0),
                'top': (0)
              });
              //$(li).eq(a - 1).removeClass("menu-li-shown").delay(dur * (i - a)).addClass("menu-li-hidden")
    }
  }
});
})($);

/*
      var queue, it = 0;
      for (var a = i; a >= 0; a--) {
        if (a == 0 || a == i)
          continue;
        queue = $.queue("queue"+ it++, function(){
            $(li).eq(a - 1).css({
                'transition-delay': "" + (dur * (i - a)) + "ms",
                '-webkit-transition-delay': "" + (dur * (i - a)) + "ms",
                'left': (0),
                'top': (0)
              }).removeAttr('style').addClass("menu-li-hidden").removeClass("menu-li-shown");
          });
      }
      for(var i = 0; i < it; i++)
      $(queue).dequeue("queue"+i);
      *
    }
  });
})($);
*/
/*
(function(){
    var ul=$("#navs"),li=$("#navs li"),i=li.length,n=i-1,r=250;
    ul.click(function(){
      $(this).toggleClass('active');
      if($(this).hasClass('active')){
        for(var a=0;a<i;a++){
          li.eq(a).css({
            'transition-delay':""+(150*a)+"ms",
            '-webkit-transition-delay':""+(150*a)+"ms",
            'left':(r*Math.cos(90/n*a*(Math.PI/180))),
            'top':(-r*Math.sin(90/n*a*(Math.PI/180)))  
          });
        }
      }else{
        li.removeAttr('style');
      }
    });
  })($);
*/