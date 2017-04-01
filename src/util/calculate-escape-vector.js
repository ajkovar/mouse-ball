import {subtractVectors, addVectors, magnitude, divideVector, multiplyVector} from './vector-algebra';

export function unboundedEscapeVector(hunter, prey, center){
  const escapeVector = subtractVectors(prey, hunter)
  const escapeMagnitude = magnitude(escapeVector)
  const escapeUnitVector = divideVector(escapeVector, escapeMagnitude)

  const frame = multiplyVector(center, 2)
  const multiplier = subtractVectors(frame, [Math.abs(escapeVector[0]), Math.abs(escapeVector[1])])
  return [escapeUnitVector[0]*multiplier[0], escapeUnitVector[1]*multiplier[1]]
}

export default function calculateEscapeVector({hunter, prey, center}){
  const towardCenterVector = multiplyVector(subtractVectors(center, prey), 2)
  const combined = addVectors(towardCenterVector, unboundedEscapeVector(hunter, prey, center))
  return divideVector(combined, 2)
}
