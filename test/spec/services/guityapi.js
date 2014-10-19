'use strict';

describe('Service: guityAPI', function () {

  // load the service's module
  beforeEach(module('guityApp'));

  // instantiate service
  var guityAPI;
  beforeEach(inject(function (_guityAPI_) {
    guityAPI = _guityAPI_;
  }));

  it('should do something', function () {
    expect(!!guityAPI).toBe(true);
  });

});
