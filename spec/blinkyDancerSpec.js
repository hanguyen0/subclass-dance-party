describe('blinkyDancer', function () {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    blinkyDancer = new BlinkyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function () {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(blinkyDancer.$node, 'toggleClass');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggleClass.called).to.be.true;
  });

  describe('dance', function () {
    it('should call step at least once per second', function () {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('slideDancer', function () {

  var slideDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    slideDancer = new SlideDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $patndan object', function () {
    expect(slideDancer.$patndan).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(slideDancer.$patndan, 'toggle');
    slideDancer.step();
    expect(slideDancer.$patndan.toggle.called).to.be.true;
  });

  describe('slideDancer', function () {
    it('should call step at least once per second', function () {
      sinon.spy(slideDancer, 'step');
      expect(slideDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(slideDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(slideDancer.step.callCount).to.be.equal(2);
    });
  });
});

describe('crowd', function () {

  var crowd, clock;
  var timeBetweenSteps = 100;

  beforeEach(function () {
    clock = sinon.useFakeTimers();
    crowd = new Crowd(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $crowd object', function () {
    expect(crowd.$crowd).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function () {
    sinon.spy(crowd.$crowd, 'animate');
    crowd.step();
    expect(crowd.$crowd.animate.called).to.be.true;
  });

  describe('crowd', function () {
    it('should call step at least once per second', function () {
      sinon.spy(crowd, 'step');
      expect(crowd.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps);
      clock.tick(timeBetweenSteps);

      expect(crowd.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(crowd.step.callCount).to.be.equal(2);
    });
  });
});