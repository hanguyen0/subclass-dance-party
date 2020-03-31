class BlinkyDancer extends Dancer {//Animal.call(this)
  //Any properties specific for a blinky dancer
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    // this.$node = $('<span class="blinkyDancer"></span>');
    // this.$node.css({ "top": top, "left": left });
  }
  //$node, step
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,

  // so we must keep a copy of the old version of this function

  // var oldStep = this.step;

  // call the old version of step at the beginning of any call to this new version of step
  step() {

    this.$node.toggle();
    this.$node.css({ "color": "white"});
  }
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

};
// var oldStep = blinkyDancer.step;

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };
