import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'memberFilter'
})
export class MemberFilterPipe implements PipeTransform {

  transform(input: any, key, value): any {
    if(!input){return input;}
    return input.filter(function(member){
      if(member[key] === value || value === "all"){
        return true;
      } else {
        return false;
      }
    });
  }

}
