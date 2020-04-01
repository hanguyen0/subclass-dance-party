var BlinkyDancer = function (top, left, timeBetweenSteps) {
  //Any properties specific for a blinky dancer
  Dancer.call(this, top, left, timeBetweenSteps);
  // this.$node = $('<img class="dancer" src="/src/img/Josh.jpeg"></img>');


  //$node, step
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;


BlinkyDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggleClass('flip');
};
