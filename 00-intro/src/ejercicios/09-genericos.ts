
/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(argumento : T){
    return argumento;
}

let soyString = queTipoSoy('HolaMundo');
let soyNumber = queTipoSoy(100);
let soyBoolean = queTipoSoy(false);
let soyFloat = queTipoSoy(99.5);
let soyArreglo = queTipoSoy([1,2,3,4,5]);

