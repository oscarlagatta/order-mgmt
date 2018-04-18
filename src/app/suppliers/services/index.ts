import { SuppliersService } from './suppliers.service';
import { SuppliersListService } from './suppliers-list.service';

export const services: any[] = [SuppliersListService, SuppliersService];

export * from './suppliers-list.service';
export * from './suppliers.service';
