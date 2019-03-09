'use strict';

describe('Component: WorkshopsComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var WorkshopsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    WorkshopsComponent = $componentController('workshops', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
