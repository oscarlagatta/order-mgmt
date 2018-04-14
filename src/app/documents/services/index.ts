import { OrdersService } from './orders.service';
import { OrderLinesService } from './order-lines.service';

export const services: any[] = [OrdersService, OrderLinesService];

export * from './orders.service';
export * from './order-lines.service';
