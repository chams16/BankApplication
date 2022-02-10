export class Transactionrequest{
  constructor(

    private receiverName?:string,

    private receiverAccountNumber?:string,

    private amount?:number,

    private senderName?:string,

    private senderAccountNumber?:string,

    private password?:string,

    private code?:number
  ) {
  }
}
