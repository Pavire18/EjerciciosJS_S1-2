/*
    Crea una función que imprima todos los números primos entre el 1 y el 100.
        Después, tendrá que imprimir la suma de todos esos
*/

function sumarPrimos(){
    let resultado=0;
    let esPrimo;
    for (let i = 2; i < 100; i++) {
        esPrimo=true;
        for (let x = 2; x < i; x++) {
            if (i % x === 0) {
                esPrimo=false;
            }
        }
        if(esPrimo){
            resultado+=i;
            console.log(i);
        }
    }
    return resultado;
}

console.log('Suma de Primos--> '+sumarPrimos());