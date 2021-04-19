/*
    ===== Código de TypeScript =====
*/
export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc : 'Nokia  A1',
    precio : 150
}

const tableta: Producto = {
    desc : 'iPad Air',
    precio : 350
}

export function calculaISV( productos: Producto[]) : number []{

    let total = 0;

    productos.forEach( ({precio}) =>{
        total += precio; // creo la desestructuracion dentro del forEach, indicando las variables. Asi no debo escribir producto.precio, solamente escribo precio
    })

    return [total, total * 0.15]
}

const articulos: Producto [] = [telefono,tableta];

const isv = calculaISV(articulos);

const [ precioTotal, isvPrecio] = isv;

console.log('El precio total es: ', precioTotal, 'y su ISV: ',isvPrecio);