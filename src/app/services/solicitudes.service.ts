import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private http: HttpClient) { }

  getJefe(){
    return this.http.get<any>(`http://localhost:8080/Final/rs/clientes/jefe`)
  }
  
  getCuenta(id : any){
    return this.http.get<any>(`http://localhost:8080/Final/rs/cuenta/${id}`)
  }

  recarga(origen: any, destino: any,operador:any, monto: any, valor: any){
    return this.http.post(`http://localhost:8080/Final/rs/cuenta/${origen}/${destino}/${operador}/${monto}`, valor)
  }

  getCliente(){
    return this.http.get<any>(`http://localhost:8080/Final/rs/clientes/lista`)
  }

  getCuentaId(id: any){
    return this.http.get<any>(`http://localhost:8080/Final/rs/cuenta/${id}`)
  }
}
