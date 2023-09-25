import {Router,RouteConfig} from 'aurelia-router';
import { ProductService } from "Services/Product-services";
import {inject} from 'aurelia-framework';

@inject(ProductService)
export class Index {

    password: string;
    email:string;

    constructor( 
        private ProductService: ProductService, private router: Router
    ){

    }
    activate(params: any, routeConfig: RouteConfig){
        this.router=routeConfig.navModel.router;
    }

    login(){
      //  this.ProductService.getUser(this.email,this.password).then(data=>{
           
            this.router.navigateToRoute('Product')
    //}).catch(error=>
          //  console.error(error));
        
    }
}