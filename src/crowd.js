var Crowd = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

Crowd.prototype = Object.create(Dancer.prototype);
Crowd.prototype.constructor = Crowd;


Crowd.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$crowd.animate({ left: '250px' });
};