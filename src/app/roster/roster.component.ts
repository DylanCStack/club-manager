import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})
export class RosterComponent implements OnInit {
  members: FirebaseListObservable<any[]>;

  constructor(private MemberService: MemberService, private router: Router) { }

  ngOnInit() {
    this.members = this.MemberService.getMembers();
  }


  goToProfile(member){
    this.router.navigate(['member', member.$key]);
  }
}
