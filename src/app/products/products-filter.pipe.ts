
import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './products';
import {filter} from 'rxjs/operators';

@Pipe({
    name:'myProductFilter'
})


export class ProductFilter implements PipeTransform{
   
transform(value:IProduct[],filterBy:string):IProduct[] {
    filterBy=filterBy?filterBy.toLowerCase():null;
    return filterBy? value.filter((product:IProduct)=>
    product.name.toLowerCase().indexOf(filterBy)!== -1):value;
}


/*
indexOf
*/

}