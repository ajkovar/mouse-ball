import assert from 'assert'
import calculateEscapeVector, {unboundedEscapeVector} from '../../src/util/calculate-escape-vector'

describe('unboundedEscapeVector', () => {
  let [hunter, center] = [[2, 2], [3, 3]]

  it(`should return [5, 0] for [${hunter}], [3, 2], [${center}]`, () => {
    assert.deepEqual([5, 0], unboundedEscapeVector(hunter, [3, 2], center))
  })

  it(`should return [4, 0] for [${hunter}], [4, 2], [${center}]`, () => {
    assert.deepEqual([4, 0], unboundedEscapeVector(hunter, [4, 2], center))
  })

  it(`should return [3, 0] for [${hunter}], [5, 2], [${center}]`, () => {
    assert.deepEqual([3, 0], unboundedEscapeVector(hunter, [5, 2], center))
  })

  it(`should return [0, 5] for [${hunter}], [2, 3], [${center}]`, () => {
    assert.deepEqual([0, 5], unboundedEscapeVector(hunter, [2, 3], center))
  })
})

describe('calculateEscapeVector', () => {
  let [hunter, center] = [[2, 2], [3, 3]]
  it(`should return [-.5, 1] for [${hunter}], [1, 2], [${center}]`, () => {
    let prey = [1, 2]
    assert.deepEqual([-.5, 1], calculateEscapeVector({hunter, prey, center}))
  })

  it(`should return [-2, 1] for [${hunter}], [6, 2], [${center}]`, () => {
    let prey = [6, 2]
    assert.deepEqual([-2, 1], calculateEscapeVector({hunter, prey, center}))
  })

  it(`should return [1, 1] for [${hunter}], [0, 2], [${center}]`, () => {
    let prey = [0, 2]
    assert.deepEqual([1, 1], calculateEscapeVector({hunter, prey, center}))
  })
})
