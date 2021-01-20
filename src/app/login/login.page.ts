import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  constructor(private service: SharedService, public router: Router) { }

  @Input() usr: any;
  userID: number;
  password: string;
  userID2: string;

  ngOnInit() {

  }

  loginAction() {
    console.log('btn clicked');
    this.userID2 = "" + this.userID;

    this.router.navigate(['/profil', this.userID2])

  }






}
