import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
// components
import * as fromComponents from './components';

// containers
import * as fromContainers from './containers';

const ROUTES: Routes = [
  { path: '', component: fromContainers.DocumentsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class DocumentRoutingModule {}
