function julia (c, z0) {
  let z = z0;
  let n = 0;
  while (z.distance(new ComplexNumber(0,0)) <= 2 && n < maxIterations) {
    z = z.power(2).add(c);
    n += 1;
  }
  return n;
}
