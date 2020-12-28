import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const PRODUCTKEY = "product_key";


@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  
 
  constructor(private _http : HttpClient) { }
  

  
  storeProduct(product){
    window.localStorage.setItem(PRODUCTKEY,product)
  }

  getProduct(){
    return localStorage.getItem(PRODUCTKEY);
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
