import {subtractVectors, magnitude} from './vector-algebra';

export default function isWithin(pointA, pointB, distance){
  return magnitude(subtractVectors(pointA, pointB)) < distance
}
