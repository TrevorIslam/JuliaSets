class ComplexNumber {
  constructor (a, b) {
    this.a = a;
    this.b = b;
  }

  add (other) {
    let newA = this.a + other.a;
    let newB = this.b + other.b;

    return new ComplexNumber(newA, newB);
  }

  subtract (other) {
    let newA = this.a - other.a;
    let newB = this.b - other.b;

    return new ComplexNumber(newA, newB);
  }

  multiply (other) {
    let newA = (this.a * other.a - this.b * other.b);
    let newB = (this.a * other.b + this.b * other.a);

    return new ComplexNumber(newA, newB);
  }

  divide (other) {
    let numerator = this.multiply(other.complexConjugate());
    let denominator = other.multiply(other.complexConjugate());

    let newA = numerator.a / denominator.a;
    let newB = numerator.b / denominator.a;
    return new ComplexNumber(newA, newB);
  }

  distance (other) {
    let a = other.a - this.a;
    let b = other.b - this.b;

    return Math.sqrt(a * a + b * b);
  }

  power (num) {
    let temp = new ComplexNumber (1,0);
    for (let i = 0; i < num; i++) {
      temp = temp.multiply(this);
    }
    return temp;
  }

  complexConjugate () {
    var newB = this.b * -1;

    return new ComplexNumber (this.a, newB);
  }
}
