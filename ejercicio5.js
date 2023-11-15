/*
    Crea una función que reciba un array de objetos persona y devuelva un array con el nombre de las personas
    cuyo id coincida con la posición del array en el que se encuentra.


    Ejemplo:
        Entrada: [{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ]
        Salida: ['Juan','Gon','Fran']
*/


let personas=[{id:2, name:'Pedro'},{id:1, name:'Juan'},{id:5, name:'Luis'},{id:3, name:'Gon'},{id:4, name:'Fran'} ];

function checkPosition(col){
    let result=[];
    for (let i = 0; i < col.length; i++) {
        if(col[i].id==i){
            result.push(col[i].name);
        }
    }
    return result;
}

console.log(checkPosition(personas));