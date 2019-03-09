'use strict';

describe('Component: WorkshopComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var WorkshopComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    WorkshopComponent = $componentController('workshop', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
