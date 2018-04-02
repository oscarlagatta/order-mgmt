import { Component, OnInit, ViewChild } from '@angular/core';
import { CustomersService } from '../../services';
import { CustomerModel } from '../../models/customer.interface';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Observable } from 'rxjs/Observable'
import { DataSource } from '@angular/cdk/collections';


@Component({
    selector: 'customers',
    styleUrls: ['customers.component.scss'],
    templateUrl: 'customers.component.html'
    
})

export class CustomersComponent {
   
    title:string = "Customers";
    
    dataSource = new CustomersDataSource(this.customersService);

    displayedColumns = ['id','firstname', 'lastname', 'active'];

    constructor(private customersService: CustomersService) { }

}

export class CustomersDataSource extends  DataSource<any> {
    constructor(private customersService: CustomersService) { 
        super();
    }

    connect(): Observable<CustomerModel[]> {
        return this.customersService.getCustomers();
    }

    disconnect() {}
}