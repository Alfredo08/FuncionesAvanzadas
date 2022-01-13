function imprime( n, i ){
    console.log( n, i );
}

let nums = [ 10, 20, 30, 40, 50 ];

let sum = 0;
nums.forEach( ( num, indice, arr ) => {
    nums[indice] = num + 5;
}); 

//console.log( nums );
//nums.forEach( imprime );

let result = nums.find( (num) => num % 2 === 1 );

let result2 = nums.find( function(num){
    if( num % 2 === 1 ){
        return num;
    } 
});

//console.log( result2 );

function filtrarImpares( num ){
    if( num % 2 === 1 ){
        return num;
    }
}

nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

let resultFilter = nums.filter( filtrarImpares );

//console.log( resultFilter );

const convierteAObjeto = num => { 
    return {numero: num}; 
};

let resultMap = nums.map( convierteAObjeto );

console.log( resultMap, nums  );

