import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGifsResponse, Gif } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _historial: string[] = [];
  private apiKey: string = 'xKkQ7Fl2qlPW5WgPG884yupWohbBO11o';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';

  //TODO: Cambiar any por su tipo correspondiente
  // almacena los 10 gifs que vienen de la búsqueda
  public resultados : Gif[] = [];

  get historial() {
    return [...this._historial];
    // para romper la relación y hacer que si se cambia algo aquí no modifique al array real.
  }

  constructor( private http: HttpClient) {

//    this._historial =  JSON.parse(localStorage.getItem('historial')!) || [];
    if( localStorage.getItem('historial')){
      this._historial = JSON.parse(localStorage.getItem('historial')!);
    }

    this.resultados =  JSON.parse(localStorage.getItem('resultados')!) || [];
  }

  buscarGifs( query: string = ''){
    query = query.trim().toUpperCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift( query );  
      this._historial = this._historial.splice(0,10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('limit', '10')
          .set('q', query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`, {params})
            .subscribe( (resp) => {
              this.resultados = resp.data;
              localStorage.setItem('resultados', JSON.stringify(this.resultados));
            })
  }
}
