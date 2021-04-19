
/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre : string;
    hijos?: string[]
}

const pasajero1: Pasajero = {

    nombre: 'Melvin'
}

const pasajero2: Pasajero = {
    nombre: 'Melissa',
    hijos: ['Diego', 'Paula']
}

function imprimeHijos (pasajero: Pasajero): void {

    const cuantosHijos = pasajero.hijos?.length || 0;
    // trate de tomar el valor de los pasajeros, sino será indefined, si es indefined que mande un 0

    console.log(cuantosHijos);
}

imprimeHijos(pasajero1);