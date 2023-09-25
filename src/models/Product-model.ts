export class ProductModel {

    constructor(init?: Partial<ProductModel>)
    {
      Object.assign(this, init);
    }
    
    Id: number
    Name: string
    Price: number
    Description: string
    Image:string
}