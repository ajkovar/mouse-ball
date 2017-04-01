export function magnitude(a){
  return Math.sqrt(a[0]*a[0] + a[1]*a[1])
}

export function divideVector(a, q){
  return [a[0]/q, a[1]/q]
}

export function subtractVectors(a, b){
  return [a[0]-b[0], a[1]-b[1]]
}

export function addVectors(a, b){
  return [a[0]+b[0], a[1]+b[1]]
}

export function multiplyVector(a, scalar){
  return [a[0]*scalar, a[1]*scalar]
}
