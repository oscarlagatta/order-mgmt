import { NgModule } from '@angular/core';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';

@NgModule({
  imports: [],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  providers: [...fromServices.services],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class SuppliersModule {}
