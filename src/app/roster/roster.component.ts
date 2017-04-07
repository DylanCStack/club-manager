import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { FirebaseListObservable } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css'],
  providers: [MemberService]
})
export class RosterComponent implements OnInit {
  members: FirebaseListObservable<any[]>;
  searchRole:string = "all";
  // roles: FirebaseListObservable<any[]>;
  currentRoute: string = this.route.url;
  selectedMember = null;

  constructor(private MemberService: MemberService, private router: Router, private route: Router) { }

  ngOnInit() {
    this.members = this.MemberService.getMembers();
    // this.roles = this.MemberService.getAllRoles();
  }

  filterRoles(role){
    this.searchRole = role;
  }
  selectMember(member){
    this.selectedMember = member;
  }
  editMember(member){
    this.MemberService.updateMember(member);
  }

  deleteMember(member){
    this.MemberService.removeMember(member);
  }

  goToProfile(member){
    this.router.navigate(['member', member.$key]);
  }
}
