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
  searchKey:string = "all";
  // roles: FirebaseListObservable<any[]>;
  currentRoute: string = this.route.url;
  selectedMember = null;
  keys: string[];
  keyToSearch: string = "null";

  constructor(private MemberService: MemberService, private router: Router, private route: Router) { }

  ngOnInit() {
    this.members = this.MemberService.getMembers();
    // this.roles = this.MemberService.getAllRoles();
    this.members.subscribe(snap =>{
      this.keys = Object.keys(snap[0]);
    })
  }

  filterByThis(key){
    this.searchKey = key;
  }
  selectMember(member){
    this.selectedMember = member;
  }
  editMember(member){
    this.MemberService.updateMember(member);
    this.selectedMember = null;
  }

  deleteMember(member){
    this.MemberService.removeMember(member);
  }

  goToProfile(member){
    this.router.navigate(['member', member.$key]);
  }
}
