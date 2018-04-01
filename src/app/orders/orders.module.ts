import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import * as fromContainers from './containers';
import * as fromComponents from './components'

import * as fromServices from './services'

@NgModule({
    imports: [ BrowserModule, CommonModule],
    declarations: [...fromContainers.containers, ...fromComponents.components],
    providers: [...fromServices.services],
    exports: [...fromContainers.containers, ...fromComponents.components]
})
export class OrdersModule {

}