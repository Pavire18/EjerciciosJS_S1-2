/*
    Un palíndromo es una palabra que se deletrea de la misma manera en ambos sentidos.
    Crea una función que reciba una palabra y devuelva true o false si es o no palíndromo.

    Ejemplo:
        Entrada: 'oso'
        Salida: true
*/

function isPalindromo(word){
    let letters=[];
    let porcesedWord=word.replace(/\s/g, '').toLowerCase();
    console.log(porcesedWord);
    for (let i = 0; i < porcesedWord.length; i++) {
        letters.push(porcesedWord.charAt(i));
    }
    if(letters.toString()===letters.reverse().toString()){
        return true;
    }else{
        return false;
    }

};

console.log(isPalindromo('Son robos o sobornos'));