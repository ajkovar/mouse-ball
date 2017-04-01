import assert from 'assert';
import isWithin from '../../src/util/is-within';

describe('isWithin', () => {
  let [a, b] = [[2, 2], [3, 3]]
  it(`should return true for [${a}], [${b}], 2`, () => {
    assert.equal(true, isWithin(a, b, 2))
  })

  it(`should return true for [${a}], [${b}], 1`, () => {
    let [a, b] = [[2, 2], [3, 3]]
    assert.equal(false, isWithin(a, b, 1))
  })
})
