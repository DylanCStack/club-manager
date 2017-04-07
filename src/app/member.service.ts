import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Member } from './member.model';

@Injectable()
export class MemberService {
  members: FirebaseListObservable<any[]>;

  constructor( private angularFire: AngularFire) {
    this.members = angularFire.database.list('members');
  }

  getMembers(){
    return this.members;
  }
  getByKey(key){
    return this.angularFire.database.object('members/'+key);
  }
  saveNewMember(e){
    console.log("service level");
    this.members.push(new Member(e.first, e.last, e.school, e.level, e.role));
  }

}
