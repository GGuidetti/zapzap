import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ComponentPar } from '../componentes/par/component.par';
import { ZapPar } from '../componentes/par/zap.par';
import { Component3Par } from '../componentes/par/component3.par';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage,ComponentPar,ZapPar,Component3Par]

})
export class HomePageModule {}
