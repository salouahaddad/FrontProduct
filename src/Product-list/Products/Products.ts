import { ProductService } from 'Services/Product-services';
import{ProductModel} from '../../models/Product-model';
import {inject} from 'aurelia-framework';
import {Router,RouteConfig} from 'aurelia-router';

@inject(ProductService)
export class Products {

   // Product:ProductModel;
listProduct:ProductModel[];
    constructor( 
      private ProductService: ProductService,  private router: Router
    ){

    }
    activate(params: any, routeConfig: RouteConfig){
      this.router=routeConfig.navModel.router;

  this.getAllProduct();
  
    }

    getAllProduct() {
      this.ProductService.getAllProduct().then(data=>
        {
          this.listProduct=data;
        }).catch(error=>
          console.error(error)
        );
     
      
     
    }

Add(){
  this.router.navigateToRoute('newProduct');
}
delete=id=>{

  this.DeleteProduct(id)
}
DeleteProduct(id){

  this.ProductService.DeleteProduct(id).then(()=>{
    this.getAllProduct();
  }).catch(error=> console.error(error));
}

}