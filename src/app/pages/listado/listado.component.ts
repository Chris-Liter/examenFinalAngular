import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { Cuenta } from 'src/app/model/Cuenta';
import { Jefe } from 'src/app/model/Jefe';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit{

  clientes: Cliente [] = []
  cuenta: Cuenta [] = []
  jefe: Jefe = new Jefe()

  constructor(private service: SolicitudesService){
    
  }

  ngOnInit(): void {
    this.service.getCliente().subscribe(data=>{
      this.clientes = data
    })
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

  select(id: any){
    this.service.getCuentaId(id).subscribe(data=>{
      console.log(data)
      this.cuenta = [data]
    })
  }
  


}
