import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  constructor(private service: SharedService, public activeRoute: ActivatedRoute) { }

  @Input() usr: any;
  userID: number;
  password: string;
  dataRecv: string;

  User2List: any = [];

  ngOnInit() {

    this.dataRecv = this.activeRoute.snapshot.paramMap.get('userID');
    console.log(this.dataRecv);
    this.UserList();
  }


  UserList() {

    this.userID = +this.dataRecv;

    this.service.getUserList(this.userID).subscribe(data => {

      this.User2List = data
      console.log(this.User2List)
    })

  }
 

}

