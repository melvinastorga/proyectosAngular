import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela',
})
export class VuelaPipe implements PipeTransform {
   
    transform( valor: boolean = true ):string {
       
        if (valor) {
            return "Vuela";
        } else {
            return "No vuela";
        }
        
    }

    

}