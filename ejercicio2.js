/*
    Crea una función que reciba 2 arrays de números y devuelva uno unificado,
    sumando los números de la misma posición.
    Los arrays pueden tener diferente longitud.

    Elemplo:
      Entrada: [1,4,5,7] [2,1,5,1,1]
      Salida: [3,5,10,8,1]
*/

let collection1=[1,4,5,7];
let collection2=[2,1,5,1,1];


function arrayMixer(col1,col2){
    let arrayMixed=[];
    if(col1.length>col2.length){
        for (let i = 0; i < col1.length; i++) {
            if(col2[i]==undefined){
                arrayMixed.push(col1[i]);
            }else{
                arrayMixed.push(col1[i]+col2[i]);
            }
        }
    }else{
        for (let i = 0; i < col2.length; i++) {
            if(col1[i]==undefined){
                arrayMixed.push(col2[i]);
            }else{
                arrayMixed.push(col1[i]+col2[i]);
            }
        }
    }
    return arrayMixed;
}

console.log(arrayMixer(collection1,collection2));