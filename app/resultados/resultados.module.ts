import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResultadosPage } from './resultados.page';

const routes: Routes = [
  {
    path: '',
    component: ResultadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResultadosPage],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ResultadosPageModule {}
