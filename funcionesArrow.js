/*
function nombreFuncion(num1, num2){

}

let nombreFuncion = (num1, num2) => {

}
*/

function sumaDosNumeros( num1, num2 ){
    let resultado = num1 + num2;
    return num1 + num2;
}

let sumaDosNumerosFlecha = ( num1, num2 ) => num1 + num2;



let res1 = sumaDosNumeros( 20, 30 );
let res2 = sumaDosNumerosFlecha( 20, 30 );

console.log( res1, res2 );

let imprimeHola = nombre => console.log( "Hola", nombre );


imprimeHola( "Alex" );

const num = 3.1416;

console.log( num );

num = 3.33333;