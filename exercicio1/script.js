const lista = [];

function inserirElemento(elemento) {
    if (typeof elemento !== 'string' || elemento.length > 7) {
        return `Não foi possível inserir este valor`;
    }

    if (lista.length >= 10) {
        return `Não foi possível inserir este valor`;
    }

    lista.push(elemento);
    return `Elemento inserido com sucesso, a lista agora é: ${lista}`;
}


console.log(inserirElemento(`HelloWorld`));
console.log(inserirElemento(`item1`));
console.log(inserirElemento(`item2`));
console.log(inserirElemento(`item3`));
console.log(inserirElemento(`item4`));
console.log(inserirElemento(`item5`));
console.log(inserirElemento(123));
console.log(inserirElemento(`item6`));
console.log(inserirElemento(`item7`));
console.log(inserirElemento(`item8`));
console.log(inserirElemento(`item9`));
console.log(inserirElemento(`item10`));
console.log(inserirElemento(`item11`));