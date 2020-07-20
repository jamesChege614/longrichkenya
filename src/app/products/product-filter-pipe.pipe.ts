import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productFilterPipe'
})
export class ProductFilterPipePipe implements PipeTransform {

  transform(items:any[], creteria:string): any {
    if( creteria === 'all'){
      return items
    }
    else{
     return items.filter(item =>{
       return item.category === creteria;
     })
    }
  }

}