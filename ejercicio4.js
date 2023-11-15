/*
    Crea una función que reciba un array de personas y devuelva un string con las personas separadas
    por el símbolo recibido en el segundo argumento.

    Ejemplo:
        Entrada: (['Pedro', 'Gon', 'Luis', 'Fran'], '/')
        Salida: 'Pedro/Gon/Luis/Fran'
*/
let names=['Pedro', 'Gon', 'Luis', 'Fran'];

function transformArray(col,separator){
    let result='';
    for (let i = 0; i < col.length; i++) {
        if(i!=0)
            result+=separator;
        result+=col[i];
    }
    return result;
}

console.log(transformArray(names,'/'));