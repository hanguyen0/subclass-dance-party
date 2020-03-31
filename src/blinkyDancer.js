var BlinkyDancer = function (top, left, timeBetweenSteps) {
  //Any properties specific for a blinky dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  //$node, step
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

// var oldStep = blinkyDancer.step;


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,

// so we must keep a copy of the old version of this function

// var oldStep = this.step;

// call the old version of step at the beginning of any call to this new version of step
BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();


  // this.$node.css({ "color": "white"});
}
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.