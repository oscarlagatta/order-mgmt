export interface PartnerModel{
    /* Partner is a customer or a supplier */
    partnerId:number;
    partnerName:string;
    firstName:string;
    secondName:string;
    address1:string;
    address2:string;
    zipCode:string;
    town:string;
    state:string;
    countryId:string;
    telefone:string;
    mail:string;
    salesmanId:number;
    isCustomer:boolean;
    isSupplier:boolean;
}