import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allbooks:[],searchkey:string,propname:string): any[] {
    const result:any=[];

    if(!allbooks ||searchkey==''||propname==''){
      return allbooks;
    }
    //search

    allbooks.forEach((page:any)=>{
      if(page[propname].trim().toLowerCase().includes(searchkey.toLocaleLowerCase())){
        result.push(page);
      }
    })
    return result;
  }

}
