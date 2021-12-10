import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CidadesRoutingModule } from './cidades-routing.module';
import { CidadesComponent } from './cidades.component';

@NgModule({
  declarations: [
    CidadesComponent
  ],
  imports: [
    CommonModule,
    CidadesRoutingModule
  ]
})
export class CidadesModule { }
