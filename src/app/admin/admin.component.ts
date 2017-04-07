import { Component, OnInit } from '@angular/core';
import { RosterComponent } from '../roster/roster.component';
import { NewMemberComponent } from '../new-member/new-member.component';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [MemberService]
})
export class AdminComponent implements OnInit {

  constructor(private MemberService: MemberService) {

  }

  ngOnInit() {
  }
  saveMember(e){
    console.log("admin level");
    this.MemberService.saveNewMember(e);
  }

}
