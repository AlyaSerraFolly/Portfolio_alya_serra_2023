/*
 You can update :
 - scaleFactor to enlarge the animations of shapes
 - resetTimerMs to update the reset of timer (time when we reset the addition of scrolls)
 - scrollDistanceStep (by default you have to scroll 700 px in 5s to move on previous or next slide)
 */

var scrollDistanceOnce = 0;
var scrollDistance = 0;
var scaleFactor = 0.003;
var resetTimerMs = 5000;
var scrollDistanceStep = 700;

$(window).on("mousewheel", function (event) {
  scrollDistanceOnce = event.originalEvent.wheelDeltaY;
  var st = $(this).scrollTop();
  var windowHeight = $(window).height();
  //event.originalEvent.deltaY pour firefox
  console.log("*****");
  console.log(event.originalEvent.deltaY);

  if (0 > scrollDistanceOnce) {
    // downscroll code

    // What is the next position of scrolll
    var nextScroll = st + windowHeight;

    // if there is no scrolling
    if (!$("body").hasClass("scrolling")) {
      scrollDistance += event.originalEvent.wheelDeltaY;
      console.log(nextScroll);
      var scale = scaleFactor * -scrollDistance;
      $(".anchor_hidden").css({ transform: "scale(" + scale + ")" });
      setTimeout(function () {
        $(".anchor_hidden").css({ transform: "scale(0)" });
      }, 500);

      //Réinitialisation si au bout de 5s la valeur cumulée ne suffit pas pour passer à la slide suivante
      var resetTimer = setTimeout(function () {
        scrollDistance = 0;
      }, resetTimerMs);

      if (scrollDistance < -scrollDistanceStep) {
        // Scroll part
        clearTimeout(resetTimer);
        $("body").addClass("scrolling");
        $("html, body").animate(
          {
            scrollTop: nextScroll,
          },
          700,
          function () {
            $("body").removeClass("scrolling");
            scrollDistance = 0;
          }
        );
      }
    }
  } else {
    // upscroll code
    var nextScroll = st - windowHeight;
    if (!$("body").hasClass("scrolling")) {
      scrollDistance += event.originalEvent.wheelDeltaY;

      var scale = scaleFactor * scrollDistance;
      $(".anchor_hidden--top").css({ transform: "scale(" + scale + ")" });
      setTimeout(function () {
        $(".anchor_hidden--top").css({ transform: "scale(0)" });
      }, 500);

      //Réinitialisation si au bout de 5s la valeur cumulée ne suffit pas pour passer à la slide suivante
      var resetTimer = setTimeout(function () {
        scrollDistance = 0;
      }, resetTimerMs);

      if (scrollDistance > scrollDistanceStep) {
        // Scroll part
        clearTimeout(resetTimer);
        $("body").addClass("scrolling");

        $("html, body").animate(
          {
            scrollTop: nextScroll,
          },
          700,
          function () {
            $("body").removeClass("scrolling");
            scrollDistance = 0;
          }
        );
      }
    }
  }
  scrollDistanceOnce = st;
});
