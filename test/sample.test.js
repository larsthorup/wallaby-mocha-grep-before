require('chai').should();

describe('@fast', function () {
  it('should be included', function () {
    (2 + 2).should.equal(4);
  });
});

describe('@slow', function () {
  before(function (done) {
    setTimeout(done, 5000);
  });

  it('should be skipped', function (done) {
    (2 + 2).should.equal(5);
  });
});

describe('@slow', function () {
  beforeEach(function (done) {
    setTimeout(done, 5000);
  });

  it('should be skipped', function (done) {
    (2 + 2).should.equal(5);
  });
});