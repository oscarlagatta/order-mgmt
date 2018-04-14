import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';


@NgModule({
  declarations: [...fromContainers.containers, ...fromComponents.components],

  imports: [BrowserModule, CommonModule, MatTableModule],

  providers: [...fromServices.services],
  
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class ProductsModule {}

