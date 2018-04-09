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

@NgModule({
  imports: [CommonModule, HttpClientModule, DocumentRoutingModule],
  providers: [...fromServices.services],
  declarations: [...fromContainers.conatiners, ...fromComponents.components],
  exports: [...fromContainers.conatiners, ...fromComponents.components],
})
export class DocumentsModule {}
