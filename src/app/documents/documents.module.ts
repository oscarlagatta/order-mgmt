import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

// services
import * as fromServices from './services';
import { HttpClientModule } from '@angular/common/http';
import { DocumentRoutingModule } from './document-routing.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers, effects } from './store';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    DocumentRoutingModule,
    StoreModule.forFeature('documents', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.conatiners, ...fromComponents.components],
  exports: [...fromContainers.conatiners, ...fromComponents.components],
})
export class DocumentsModule {}
