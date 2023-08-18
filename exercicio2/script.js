function calcularQuadrados(a) {
    if (a.length !== 15) {
        return `A lista deve ter exatamente 15 elementos`;
    }

    const b = [];

    for (let i = 0; i < a.length; i++) {
        const elementoQuadrado = a[i] ** 2;
        b.push(elementoQuadrado);
    }

    return b;
}

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const b = calcularQuadrados(a);

console.log(b);