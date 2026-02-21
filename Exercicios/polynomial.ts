type Polynomial = {
    coefficients: number[];
};

const polynomial: Polynomial = {
    coefficients: [2, -1, 0, 5]
};

function evaluatePolynomial(p: Polynomial, x: number): number {
    let result = 0;

    for (let i = 0; i < p.coefficients.length; i++) {
        result += p.coefficients[i]! * Math.pow(x, i);
    }

    return result;
}

const x: number = 2;
const value: number = evaluatePolynomial(polynomial, x);

console.log(`The value of the polynomial at x = ${x} is: ${value}`);
