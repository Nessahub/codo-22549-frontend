/* ts superset de JS, permite trabajar con programacion
orientada a objetos, puedo trabajar clases, intercafes, calses abstractas
*/ 
/* clase : molde de algo que se va a construir */

class Articulos {
    titulo:string;
    autor:string;
    precio:number;
}

class Buscador {
    //atributos

    claveBusqueda: string;
    articulos: Articulos[];

    //métodos

    buscar(): void {
        console.log(`buscando con la clave ${this.claveBusqueda}`);
    }
}

interface Producto {
    id: number,
    nombre: string,
}

function comprar(prod: Producto): void {
    
}