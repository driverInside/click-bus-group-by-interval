var expect = require('chai').expect;
var group  = require('../app/group');

describe("Group by interval", function() {

  describe("Validate integers", function () {
    it("Checks if a variable is integer", function () {
      expect(group.isInteger(1)).to.be.true;
      expect(group.isInteger('a')).to.be.false;
      expect(group.isInteger(-20)).to.be.true;
      expect(group.isInteger('false')).to.be.false;
      expect(group.isInteger(true)).to.be.false;
    });
  });
  
  describe("Sort array.", function () {
    it("Sorts an array", function () {
      var setOne   = [10, 1, -20,  14, 99, 136, 19, 20, 117, 22, 93,  120, 131];
      var setTwo   = [7, 9, 5, 4, 3, 1];

      expect(group.sort(setOne)).to.deep.equal([-20, 1, 10, 14, 19, 20, 22, 93, 99, 117, 120, 131, 136]);
      expect(group.sort(setTwo)).to.deep.equal([1, 3, 4, 5, 7, 9]);
    });

    it("Throws an exception when there is an invalid argument", function () {
      var setThree = [10, 1, 'A',  14, 99, 133, 19, 20, 117, 22, 93,  120, 131];
      expect(group.sort.bind(group, setThree)).to.throw();
    })
  });

  describe("Group by interval", function () {
    it("Returns an empty set of numbers if the range is null", function () {
      var setOne = [];

      expect(group.group(10, [])).to.deep.equal([]);
      expect(group.group(null, [])).to.deep.equal([]);
    });

    it("Throws an exception when there is an invalid argument", function () {
      var setThree = [10, 1, 'A',  14, 99, 133, 19, 20, 117, 22, 93,  120, 131];
      expect(group.group.bind(group, 15, setThree)).to.throw();
    })

    it("Group the set by interval", function () {
      var setTwo   = [10, 1, -20,  14, 99, 136, 19, 20, 117, 22, 93,  120, 131];
      var setThree = [-20, 24, 23, 1, 0];

      expect(group.group(10, setTwo)).to.deep.equal([[-20], [1, 10], [14, 19, 20], [22], [93, 99], [117, 120], [131, 136]]);
      expect(group.group(15, setTwo)).to.deep.equal([[-20], [1, 10, 14], [19, 20, 22], [93, 99], [117, 120], [131], [136]]);
      expect(group.group(10, setThree)).to.deep.equal([[-20], [0], [1], [23, 24]]);
    });
  });

});