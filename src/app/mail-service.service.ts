import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {


  _PassedVar;
  constructor(private _http : HttpClient) { }
  

  updatePassedVar(PassedVar){
      this._PassedVar = PassedVar;
  }

  getVar(){
    return this._PassedVar;
  }


  sendMail(body){

    let headers =  new HttpHeaders()
    .set("Acces-Control-Allow-Origin", "*")
    .set("Acces-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT")
    .set("Acces-Control-Allow-Methods" , "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization" )
    .set("Content-Type" ,"application/json; charset=utf-8");

    //een commit voor de test
    
    return this._http.post("http://localhost:3000/sendmail", body, { headers : headers}).subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    )
  }
}
