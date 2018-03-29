export interface PaymentTermsModel{
    paymentTermId:number;
    paymentTermName:string;/* */
    days:number;
    payOn:string;/* Codes for Last day of the mont, 1st valkid day, etc... */
}