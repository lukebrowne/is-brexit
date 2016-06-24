var assert = require('assert');
var isBrexit = require('../lib/is-brexit');

describe('is-brexit', function () {
    describe('init', function () {
        it('should always return true', function () {
            assert.equal(isBrexit(), true, 'Function should always return true');
        });
    });
});
