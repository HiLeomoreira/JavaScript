function numerosPares(array) {
    let resultado = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            resultado.push(array[i]);
        } else {
            console.log(array[i], ' impar');
        }
    }
    console.log('os números pares sao: ', resultado);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

numerosPares(array);