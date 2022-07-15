import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { ConteudoComponent } from './conteudo/conteudo.component';
import { LayoutComponent } from './layout/layout.component';
import { ClienteFormComponent } from './cliente/cliente-form/cliente-form.component';
import { ClienteListaComponent } from './cliente/cliente-lista/cliente-lista.component';
import { TemplateModule } from './template/template.module';
import { ClientesRoutingModule } from './cliente/clientes-routing.module';
import { Erro404Component } from './erro404/erro404.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ConteudoComponent,
    LayoutComponent,
    ClienteFormComponent,
    ClienteListaComponent,
    Erro404Component,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    TemplateModule,
    RouterModule,

    ClientesRoutingModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
