'use strict';

describe('Component: HospitalityComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var HospitalityComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    HospitalityComponent = $componentController('hospitality', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
