$(document).ready(function () {
  window.dancers = [];

  $('.addJosh').on('click', function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new BlinkyDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('div.stage').append(dancer.$node);
    dancers.push(dancer);
  });

  $('.addPatnDan').on('click', function (event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var slideDancer = new SlideDancer(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('div.stage').append(slideDancer.$patndan);
    dancers.push(slideDancer);
  });

  $('.addCrowd').on('click', function (event) {

    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    var crowd = new Crowd(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('div.stage').append(crowd.$crowd);
    dancers.push(crowd);
  });

  $('.lineUp').on('click', function (event) {
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    var dancerMakerFunction = window[dancerMakerFunctionName];

    $('.dancer').remove();
    var count = 20;
    while (count > 0) {
      var crowd = new Crowd(
        300,
        $("div.stage").width() * Math.random(),
        Math.random() * 1000
      );
      $('div.stage').append(crowd.$crowd);

      var slideDancer = new SlideDancer(
        300,
        $("div.stage").width() * Math.random(),
        Math.random() * 1000
      );
      $('div.stage').append(slideDancer.$patndan);

      var dancer = new BlinkyDancer(
        300,
        $("div.stage").width() * Math.random(),
        Math.random() * 1000
      );
      $('div.stage').append(dancer.$node);
      count--;
    }
  });
});