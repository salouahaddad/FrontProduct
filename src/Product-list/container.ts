import {Router, RouterConfiguration,RouteConfig} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';
export class container {



    constructor( 
        private router: Router
    ){

    }
    activate(  params: any, routeConfig: RouteConfig){
  
    }
    public configureRouter(config: RouterConfiguration, router: Router): void {
        config.title = 'container';
        config.map([
          { route: ['', 'listeProduct'],       name: 'listeProduct',       moduleId: PLATFORM.moduleName('Product-list/Products/Products') },
          { route:  'newProduct',       name: 'newProduct',   moduleId: PLATFORM.moduleName('Product-list/NewProduct/New-Product'),nav: true, title: 'Product' },
        ]);
        this.router = router;
      }

}