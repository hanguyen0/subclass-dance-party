// Creates and returns a new dancer object that can step
var Dancer = function (top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  if (this instanceof BlinkyDancer) {
    this.$node = $('<img class="dancer" src="/src/img/Josh.jpeg"></img>');
  }
  else if (this instanceof SlideDancer) {
    this.$patndan = $('<img class="dancer" src="/src/img/PatandDanny.jpeg"></img>')
  }
  else if (this instanceof Crowd) {
    this.$crowd = $('<img class="dancer" src="https://hiphopgrindtv.com/wp-content/uploads/2017/06/XXXTentacion-Wild-Dive.jpeg"></img>')
  }
  this.setPosition(top, left);
  this.step();
};

Dancer.prototype.step = function () {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
}

Dancer.prototype.setPosition = function (top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  if (this instanceof BlinkyDancer) {
    this.$node.css(styleSettings);
  }
  else if (this instanceof SlideDancer) {
    this.$patndan.css(styleSettings);
  }
  else if (this instanceof Crowd) {
    this.$crowd.css(styleSettings);
  }

}

Dancer.prototype.lineUp = function (top, left) {
  this.setPosition(top, left);
}

// Dancer.prototype.slide = function () {
//   // the basic dancer doesn't do anything interesting at all on each step,
//   // it just schedules the next step
//   setTimeout(this.slide.bind(this), this.timeBetweenSteps);
// }
// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  // dancer.setPosition(top, left);
// var blinkie = BlinkyDancer(10,10,100)
// blinkie.setPosition()