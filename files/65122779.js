class Complex {
    constructor(real, imaginary) {
        this.real = real;
        this.imaginary = imaginary;
    }
    toString() {
        return this.real + " + " + this.imaginary + "*i";
    }
}

const z = new Complex(1, 1);
console.log(String(z));