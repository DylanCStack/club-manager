import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeDupes'
})
export class RemoveDupesPipe implements PipeTransform {

  transform(input: any): any {
    if(!input){return null}
    var roles: Array<any> = [];
    input.forEach(function(role){
      console.log(role);
      if(roles.indexOf(role.role) === -1){
        roles.push(role.role);
      }
    })
    console.log(roles)
    return roles;
  }

}
