
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'color',
})
export class ColorPipe implements PipeTransform {
   
    transform( valor: number ):string {
       
        if (valor == 0) {
            return "Rojo";
        } else if (valor ==1) {
            return "Negro";
        } else if (valor ==2) {
            return "Azul";
        } else if (valor ==3) {
            return "Verde";
        }
        
    }

    

}




//rojo, negro, azul, verde