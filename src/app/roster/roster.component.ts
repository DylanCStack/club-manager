import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})
export class RosterComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private MemberService: MemberService) { }

  ngOnInit() {
    this.members = this.MemberService.getMembers();
  }

}
