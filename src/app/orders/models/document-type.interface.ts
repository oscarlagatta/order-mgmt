export interface DocumentType{
    typeId:string; /* Every type of document shouls have a different typeId */
    documentType:string; /* Sales Quote, Sales Order, Delivery, Sales Invoice, Credit notes and the reverse documents (purchasses) */
    lastNumber:number; /* Place to store the latest number */
    descendants:[string];/* Types of documents that can be raised from the current one */
    validStatus:[string];/* Valid status for this kind of documents (Open, Closed, Payed, Delivered, Dispatched...) */
}