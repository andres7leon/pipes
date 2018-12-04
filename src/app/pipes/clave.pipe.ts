import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'clave'
})
export class ClavePipe implements PipeTransform {

  transform(value: any, option: boolean): any {
        
    if(option){
      return '******';
    }else{
      return value;
    }

  }

}
