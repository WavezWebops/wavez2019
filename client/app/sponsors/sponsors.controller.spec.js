'use strict';

describe('Component: SponsorsComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var SponsorsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    SponsorsComponent = $componentController('sponsors', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
