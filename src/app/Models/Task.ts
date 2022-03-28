import { Transactionrequest } from "./transactionrequest";

export interface Task {
  taskId?:string;
  taskName?:string;
  taskData?:Transactionrequest[] ;
}

