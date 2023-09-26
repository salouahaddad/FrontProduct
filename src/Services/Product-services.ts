import axios from 'axios'
import {HttpClient,json} from 'aurelia-fetch-client'
import {inject,autoinject} from 'aurelia-framework';
import { ProductModel } from 'models/Product-model';


@inject(HttpClient)
export class ProductService {

  constructor(private httpClient:HttpClient ) {
    
  }

  getUser(email:string,password:string):Promise<boolean>{
    debugger;
    return new Promise<boolean> (((resolve, reject)=>{
      this.httpClient.fetch('http://localhost:5095/api/User/GetUser/'+email+"/"+password,
       {
        method: 'post'
     }).then(data=>{
      if(data.ok){
        data.json().then(data=>{
          localStorage['jwtToken']=data.token;
          resolve(true);
        }
          );
      }else{
        resolve(false);
      }
     
      
       

     }).catch(e=>reject(e));
    } ))
  }
   getAllProduct():Promise<ProductModel[]> {

    return new Promise<ProductModel[]>(((resolve, reject)=>{
      this.httpClient.fetch('http://localhost:5095/api/Product/GetProducts'
      , {
        method: 'get',
        headers:{
          'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage['jwtToken']}`
        }
      }).then(data=>
      resolve(Object.assign( data.json()))
      ).catch(e=>reject(e));
    } ))
    
  }
 
  DeleteProduct(id:number):Promise<void> {


    return new Promise<void>((resolve, reject)=>{
      this.httpClient.delete('http://localhost:5095/api/Product/DeleteProducts/id?id='+id,
       {
        method: 'delete',
        headers:{
          'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage['jwtToken']}`
        }
      })
    .then(() => {
      resolve()
    }).catch(e=>reject(e));
    } );
    
    
  }

  AddProduct(product:ProductModel):Promise<void> {
    return new Promise<void>((resolve, reject)=>{
      this.httpClient.fetch('http://localhost:5095/api/Product/AddProducts', {
        method: 'post',
        body: json(product),
        headers:{
          'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${localStorage['jwtToken']}`
        }
      }).then(data => {
      resolve();
    }).catch(e=>reject(e));
    } );
    
    
  }
 
}