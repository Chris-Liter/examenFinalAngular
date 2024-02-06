import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecargasComponent } from './pages/recargas/recargas.component';
import { LoginComponent } from './pages/login/login.component';
import { ListadoComponent } from './pages/listado/listado.component';

const routes: Routes = [
  {path: "pages/recargas", component: RecargasComponent},
  {path: "pages/login", component: LoginComponent},
  {path: "pages/listado", component: ListadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
