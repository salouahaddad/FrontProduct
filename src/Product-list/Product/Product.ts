import {bindable} from 'aurelia-framework';
import{ProductModel} from '../../models/Product-model';

export class Product {

    @bindable value;
    @bindable delete:any;
    @bindable  productModel:ProductModel;

    valueChanged(newValue, oldValue) {
      //
    }
    
}