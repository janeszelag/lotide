const assert = require('chai').assert;
const tail = require('../tail');



describe("#tail", () => {
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]),["Lighthouse", "Labs"] );
  });

});