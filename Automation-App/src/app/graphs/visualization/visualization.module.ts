import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VisualizationPageRoutingModule } from './visualization-routing.module';

import { VisualizationPage } from './visualization.page';
import {BaseChartDirective} from 'ng2-charts'
import { AddClimateControllerPageModule } from 'src/app/add-climate-controller/add-climate-controller.module';
import { AddFertigationSystemPageModule } from 'src/app/add-fertigation-system/add-fertigation-system.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VisualizationPageRoutingModule,
    AddClimateControllerPageModule,
    AddFertigationSystemPageModule
  ],
  declarations: [VisualizationPage]
})
export class VisualizationPageModule {}
