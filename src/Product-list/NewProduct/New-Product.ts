import { ProductModel } from "models/Product-model";
import {Router,RouteConfig} from 'aurelia-router';
import { ProductService } from "Services/Product-services";
import {inject} from 'aurelia-framework';

@inject(ProductService)
export class NewProduct {

    productModel:ProductModel;

    constructor( 
        private ProductService: ProductService,  private router: Router
    ){

    }
    activate(params: any, routeConfig: RouteConfig){
        this.router=routeConfig.navModel.router;

        this.productModel=new ProductModel();
       
    }


    Cancel(){
        this.router.navigateBack();
    }

    getImage(){
        let getimg=(byt:any)=>{
            this.productModel.Image=byt;
          }
        let e=<any>document.getElementById("formFileImage");
        const f: File = e.files[0];
      var  r = new FileReader();
        if (f) {
            r.onloadend = function (e) {
        
                var data = btoa(e.target.result.toString());
                getimg(data);
                // save data to server via api
            }
            r.readAsBinaryString(f);
        }

       
    }

    
    

    Save(){
        console.log(this.productModel);
        this.ProductService.AddProduct(this.productModel).then(()=>
        this.router.navigateBack()
        ).catch(error=>
            console.error(error))
    }
}