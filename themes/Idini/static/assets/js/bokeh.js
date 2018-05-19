/*
: 0.75;
: scale(0.75);
: 0 0;
-o-transform: scale(0.75);
-o-transform-origin: 0 0;
-webkit-transform: scale(0.75);
-webkit-transform-origin: 0 0;

//setIframeProp("-webkit-transform", "scale(0.75)")
/*
window.onresize = function(event) {
    console.log(event);
    if(window.innerWidth < 992){
        setIframeProp("-webkit-transform", "scale(" + 0.7 +")")
    }else{
        setIframeProp("-webkit-transform", "scale(" + 1 +")")
    }
};

V0.1

var fw = $(".fluidMedia iframe").width()
var cw = $(".fluidMedia iframe").contents().find(".bk-plot-wrapper").width()
var fh = $(".fluidMedia iframe").height()
var ch = $(".fluidMedia iframe").contents().find(".bk-plot-wrapper").height()
setIframeProp("-webkit-transform", "scale("+fw/cw+")")


var wdiff = fw-cw
var hdiff = fh-ch
setIframeProp("-ms-zoom", "scale("+(fw-35)/cw+")");
setIframeProp("-moz-transform", "scale("+(fw-35)/cw+")");
setIframeProp("-moz-transform-origin", "0 0");
setIframeProp("-o-transform", "scale("+(fw-35)/cw+")");
setIframeProp("-o-transform-origin", "0 0");
setIframeProp("-webkit-transform", "scale("+(fw-35)/cw+")");
setIframeProp("-webkit-transform-origin", "scale("+(fw-35)/cw+")");
setIframeProp("left", wdiff/2-20-22 + "px");
setIframeProp("top", hdiff/2 + "px");
$(".fluidMedia").height($(".fluidMedia iframe").contents().find(".bk-canvas-events").height());
$(".fluidMedia iframe").contents().find(".bk-toolbar-wrapper").css('left', ($(".fluidMedia iframe").width() - 60) + 'px');
$(".fluidMedia iframe").contents().find(".bk-canvas-wrapper").css('top', (-70)+ 'px');
$(".fluidMedia").css("margin-bottom", "-50px");



function setIframesProp(prop, val){
    //$(".fluidMedia iframe").contents().find("html").css(prop, val);
    //Array.from(parent.children).forEach
    //$(".fluidMedia iframe").forEach(function(item){
    Array.from($(".fluidMedia iframe")).forEach(function(item){
        //$(item).contents().find("html").css(prop, val);
        $(item).contents().find(".bk-plot-wrapper").css(prop, val);
      });
      
}

*/



/*

.bk-root

Array.from($(".fluidMedia iframe")).forEach(function(item){
        $(item).contents().find(".bk-root").css(prop, val);
});

var fw = $(".fluidMedia iframe").width()
var cw = $(".fluidMedia iframe").contents().find(".bk-plot-wrapper").width()
var fh = $(".fluidMedia iframe").height()
var ch = $(".fluidMedia iframe").contents().find(".bk-plot-wrapper").height()


var iw = $(".fluidMedia iframe").width();
var ih = $(".fluidMedia iframe").height();
var cw = $(".fluidMedia iframe").contents().find(".bk-root").width();
var ch = $(".fluidMedia iframe").contents().find(".bk-root").height();



setTransformScale($(".fluidMedia iframe"), ".bk-bs-tab-pane", "scaleY("+ih/ch+")");
setTransformScale($(".fluidMedia iframe"), ".bk-bs-tab-pane", "scaleX("+iw/cw+")");

bk-bs-tab-pane
*/

function setTransformScale(iframeSelector, elementClass, value){
    var tansformAttrs = ["-ms-zoom", "-moz-transform", "-o-transform", "-webkit-transform"];
    var tansformOriginAttrs = ["-moz-transform-origin", "-o-transform-origin", "-webkit-transform-origin"];
    Array.from(iframeSelector).forEach(function(iframe) {
    //Per ogni array
        tansformAttrs.forEach(function(attr) {
        //per ogni attributo di scale
            //Metti ad ogni figlio dell'array
            $(iframe).contents().
            //Con la classe passatagli
            find(elementClass).
            //il valore che ti ho passato
            css(attr, value);
        });

        //Setto anche l'origin
        tansformOriginAttrs.forEach(function(attr) {
            //per ogni attributo di scale
                //Metti ad ogni figlio dell'array
                $(iframe).contents().
                //Con la classe passatagli
                find(elementClass).
                //il valore 0, 0
                css(attr, '0, 0');
            });
    });
}

