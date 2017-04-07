import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-member',
  templateUrl: './new-member.component.html',
  styleUrls: ['./new-member.component.css']
})
export class NewMemberComponent implements OnInit {
  @Output() newMember = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  saveMember(newFirst, newLast, newSchool, newLevel, newRole){

    if(newFirst && newLast && newSchool && newLevel && newRole){
      console.log("new-member level")
      this.newMember.emit({
        first:newFirst,
        last: newLast,
        school: newSchool,
        level: newLevel,
        role: newRole
      });
    } else {
      alert("Please fill all avaliable fields.");
    }
  }

}
