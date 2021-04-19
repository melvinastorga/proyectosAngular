/*
    ===== Código de TypeScript =====
*/

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

const personaje: Personaje = {
    nombre : 'Melvin',
    hp: 100,
    habilidades: ['análisis', 'superfuerza', 'vuelo']
}

personaje.puebloNatal = 'Cachi';


console.table(personaje );