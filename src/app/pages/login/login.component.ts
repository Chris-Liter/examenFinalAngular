import { Component, OnInit } from '@angular/core';
import { Jefe } from 'src/app/model/Jefe';
import { SolicitudesService } from 'src/app/services/solicitudes.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  jefe: any
  constructor(private service: SolicitudesService){

  }
  ngOnInit(): void {
    const valor = localStorage.getItem("jefe")
    if(valor){
      const jef = JSON.parse(valor)
      this.jefe = [jef]
      console.log(jef)
    }
  }
}
