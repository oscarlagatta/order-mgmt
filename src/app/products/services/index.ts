import { ProductService } from './product.service';
import { ProductItemsService } from './product-items.service';

export const services:any[]=[ProductService,ProductItemsService];

export * from './product.service';
export * from './product-items.service';