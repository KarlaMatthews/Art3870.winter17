$(document).ready(function(){
  //when the document is ready, do stuff
  $(window).scrollTop(9800);
  //window.scroll(0, document.documentElement.scrollHeight);

$(document).scroll(function(){

var fromTop = $(window).scrollTop();

console.log( fromTop + " and " + (9000 - fromTop) + "px");
console.log( $(window).height() +" and "+ window.innerHeight);

$("#stem").css({height: 8500 - fromTop * 1.04 + "px"});

$("#sunflower").css({height: 8500 - fromTop * 1.04 + "px"});

//$("#butterfly").css({height: 8500 - fromTop * 1.04 + "px"});
$("#butterfly").css({"top": (600 + fromTop) * 1 + "px"});
    });

//.css({"height": 50 + scrollTop + "px"});

//$(#stem).css({height: 9000 - fromTop + "px"});

  //}); //close .scroll
}); //close .ready
