import numeral from 'numeral';
import {autoinject} from 'aurelia-framework';

@autoinject
export class CurrencyFormatValueConverter {
  toView(value) {
    return  numeral(value).format('0,0.00');
  }
}