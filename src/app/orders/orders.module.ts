import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import * as fromComponents from './components';

import * as fromServices from './services';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [BrowserModule, CommonModule, MaterialModule],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class OrdersModule {}
