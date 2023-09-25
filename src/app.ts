import {Router, RouterConfiguration} from 'aurelia-router';
import {PLATFORM} from 'aurelia-pal';

export class App  {

  constructor(private router: Router){
    
  }
  activate(params){

  }
  
  public configureRouter(config: RouterConfiguration, router: Router): void {
    config.title = 'Dashboard';
    config.map([
      { route: ['', 'home'],       name: 'home',       moduleId: PLATFORM.moduleName('home/index') },
      { route:  'Product',       name: 'Product',   moduleId: PLATFORM.moduleName('Product-list/container'),nav: true, title: 'Product' },
    ]);
    this.router = router;
  }
}
