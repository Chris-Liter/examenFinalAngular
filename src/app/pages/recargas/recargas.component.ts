import { Component, OnInit } from '@angular/core';
import { Cuenta } from 'src/app/model/Cuenta';
import { Jefe } from 'src/app/model/Jefe';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-recargas',
  templateUrl: './recargas.component.html',
  styleUrls: ['./recargas.component.scss']
})
export class RecargasComponent implements OnInit{

  cuenta: Cuenta = new Cuenta()
  jefe: Jefe = new Jefe()

  valor?: number
  estado?: boolean
  exito?: boolean
  camposVacios: boolean = false;


  constructor(private service: SolicitudesService){
    this.exito = false;
    this.estado = false;
  }
  ngOnInit(): void {
    this.service.getJefe().subscribe(data =>{
      this.jefe.dni = data.dni
      this.jefe.id = data.id
      this.jefe.nombre = data.nombre
      this.service.getCuenta(data.id).subscribe(dat =>{
        this.jefe.monto = dat.monto
        this.jefe.telefono = dat.telefono
        localStorage.setItem("jefe", JSON.stringify(this.jefe))
      })
    })
  }

  realizarRecarga(){
    const numeroAleatorio = Math.floor(Math.random() * 2) + 1;
    if (!this.cuenta.telefono || !this.cuenta.operador || !this.valor) {
      this.camposVacios = true
    }else{
      if(numeroAleatorio == 1){
        const valor = localStorage.getItem("jefe")
        if(valor){
          const jefe = JSON.parse(valor)
          this.exito = true          
          this.estado = false 
          this.camposVacios = false
          this.service.recarga(jefe.telefono, this.cuenta.telefono, this.cuenta.operador, this.valor, this.cuenta).subscribe(data=>{
            console.log(data)
            
            
          })
        }
      }else{
        this.exito = false
        this.estado = true
        this.camposVacios = false
      }
    }

  }
}
