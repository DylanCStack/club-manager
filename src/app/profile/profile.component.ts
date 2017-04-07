import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FirebaseObjectObservable } from 'angularfire2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [MemberService]
})
export class ProfileComponent implements OnInit {
  member: FirebaseObjectObservable<any>;
  memberKey: string;

  constructor(private MemberService: MemberService, private route: ActivatedRoute, private Router: Router) {
  }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.memberKey = urlParameters['key'];
    })
    this.member = this.MemberService.getByKey(this.memberKey);
  }

}
