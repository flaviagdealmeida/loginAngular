import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '../layout/layout.component';
import { ClienteFormComponent } from './cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente-lista/cliente-lista.component';

const routes: Routes = [
  {path: '', redirectTo: '/clientes/lista', pathMatch: 'full'},
  
  {path: 'clientes', component:LayoutComponent, children:[
    {path: 'form', component:ClienteFormComponent },
    {path: 'form/:id', component:ClienteFormComponent },
    {path: 'lista', component:ClienteListaComponent },

  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
