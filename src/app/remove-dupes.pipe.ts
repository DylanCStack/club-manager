import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDupes'
})
export class RemoveDupesPipe implements PipeTransform {

  transform(input: any, key): any {

    if(!input || key==="all"){return input}
    var roles: Array<any> = [];
    input.forEach(function(role){
      if(roles.indexOf(role[key]) === -1){
        roles.push(role[key]);
      }
    })
    return roles;
  }

}
