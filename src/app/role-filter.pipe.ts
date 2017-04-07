import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleFilter'
})
export class RoleFilterPipe implements PipeTransform {

  transform(input: any, role): any {
    if(!input){return input;}
    return input.filter(function(member){
      if(member.role === role || role === "all"){
        return true;
      } else {
        return false;
      }
    });
  }

}
