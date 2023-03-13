import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//esto es para poder hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//el primer http se llama alias
  constructor(private http:HttpClient) { }
//Metodo observable que devuelve datos
getDatos():Observable<any>{
  //se llama al JSON con su path -ruta-, o bien en su lugar se puede poner una url para traer datos de un JSON online
  return this.http.get('./assets/json/portfolio.json');
}

}
