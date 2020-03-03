// boki trójkąta
let a = 3;
let b = 4;
let c = 5;
let h = 7

// Pole trókąta o bokach ..., ... oraz ... wynosi ... .
const p = (a, b, c) => (a + b + c) / 2

const withHeron = (a, b, c) => {
    const halfCircuit = p(a, b, c)
    return Math.sqrt(halfCircuit * (halfCircuit - a) * (halfCircuit - b) * (halfCircuit - c))
}

const print = () =>
    `Pole trójkąta o bokach ${a}, ${b} oraz ${c} wynosi ${withHeron(a, b, c)}`;

console.log(print());