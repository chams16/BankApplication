import { Injectable } from '@angular/core';
import {Transactionrequest} from "../../Models/transactionrequest";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Task} from "../../Models/Task";

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactionUrl= "http://localhost:9000/transactions/apply"
  private getTaskUrl= "http://localhost:9000/transactions/manager/tasks"
  private rejectUrl="http://localhost:9000/transactions/manager/reject/tasks/"
  private token = localStorage.getItem("myToken")
  
  constructor(private http:HttpClient) { }

  applyTransation(request:Transactionrequest){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+this.token)
    return this.http.post(this.transactionUrl,request,{
      headers:__headers
    })
  }

  getTasks(){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    return this.http.get<Task[]>(this.getTaskUrl,{
      headers:__headers
    })
  }

  rejectTransaction(task:Task){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    console.log("rejected");
    console.log(task);
    return this.http.post(this.rejectUrl+task.taskId,{
      headers:__headers
    })    
  }

  acceptTransaction(task:Task){
    let __headers = new HttpHeaders()
    __headers = __headers.set('Authorization','Bearer '+ this.token)
    console.log(__headers)
    console.log("rejected");
    console.log(task);
    return this.http.post(this.rejectUrl+task.taskId,{
      headers:__headers
    })    
    console.log("accepted");
    console.log(task);
    
  }
}
