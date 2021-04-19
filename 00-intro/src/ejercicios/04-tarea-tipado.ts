/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: Direccion,
    mostrarDireccion: () => string;
}

interface Direccion {
    calle: string;
    pais: string;
    ciudad:string
}

const superHeroe: SuperHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return 'El personaje '+ this.nombre + ', vive en '+ this.direccion.ciudad + ', del pais '+ this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();
console.log( direccion);