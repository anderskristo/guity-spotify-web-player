'use strict';

describe('Service: searchArtists', function () {

  // load the service's module
  beforeEach(module('guityApp'));

  // instantiate service
  var searchArtists;
  beforeEach(inject(function (_searchArtists_) {
    searchArtists = _searchArtists_;
  }));

  it('should do something', function () {
    expect(!!searchArtists).toBe(true);
  });

});
