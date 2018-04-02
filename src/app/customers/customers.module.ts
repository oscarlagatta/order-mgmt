import { NgModule} from '@angular/core';

import { MatTableModule } from '@angular/material'

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';

@NgModule({
    imports: [BrowserModule, CommonModule, MatTableModule],
    declarations: [...fromContainers.containers, ...fromComponents.components],
    providers: [...fromServices.services],
    exports: [...fromContainers.containers, ...fromComponents.components]
})
export class CustomersModule {}