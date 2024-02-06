import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/model/Cliente';
import { Cuenta } from 'src/app/model/Cuenta';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent implements OnInit{

  clientes: Cliente [] = []
  cuenta: Cuenta [] = []

  constructor(private service: SolicitudesService){
    
  }

  ngOnInit(): void {
    this.service.getCliente().subscribe(data=>{
      this.clientes = data
    })
  }

  select(id: any){
    this.service.getCuentaId(id).subscribe(data=>{
      console.log(data)
      this.cuenta = [data]
    })
  }
  


}
