'use strict';

describe('Component: ScheduleComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var ScheduleComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ScheduleComponent = $componentController('schedule', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
