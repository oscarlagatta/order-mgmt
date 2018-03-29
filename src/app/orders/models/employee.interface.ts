export interface EmplopyeeModel{
    employeeId:number;/* EmployeeId is the equivalent to salesmanId or purchasserId */
    managerId:number;/* The employeeId of the employeeId's manager */
    employeeName:string;
    department:string;
    division:string;
    firstName:string;
    secondName:string;
    address1:string;
    address2:string;
    zipCode:string;
    town:string;
    state:string;/* active, inactive, suspended */
    countryId:string;
    telefone:string;
    mail:string;
}