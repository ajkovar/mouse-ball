import assert from 'assert';
import {subtractVectors, addVectors} from '../../src/util/vector-algebra';

describe('subtractVectors', () => {
  let [output, a, b] = [[1, -3], [2, 0], [1, 3]]
  it(`should return ${output} for ${a}, ${b}`, () => {
    assert.deepEqual(output, subtractVectors(a, b))
  })
})

describe('addVectors', () => {
  let [output, a, b] = [[3, 3], [2, 0], [1, 3]]
  it(`should return ${output} for ${a}, ${b}`, () => {
    assert.deepEqual(output, addVectors(a, b))
  })
})
