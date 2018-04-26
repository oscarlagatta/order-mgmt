import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import { COMPONENT_VARIABLE } from '@angular/platform-browser/src/dom/dom_renderer';
import { ProductsRoutingModule } from './products-router.module';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [...fromContainers.containers,...fromComponents.components],
  providers: [...fromServices.services],
  exports:[...fromContainers.containers,...fromComponents.components]
})
export class ProductsModule { }
