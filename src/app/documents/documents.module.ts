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
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    DocumentRoutingModule,
    MaterialModule,
    StoreModule.forFeature('documents', reducers),
    EffectsModule.forFeature(effects),
  ],
  providers: [...fromServices.services],
  declarations: [...fromContainers.containers, ...fromComponents.components],
  exports: [...fromContainers.containers, ...fromComponents.components],
})
export class DocumentsModule {}
