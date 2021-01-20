import { Component, OnInit, Input } from '@angular/core';

import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-gelir-gider',
  templateUrl: './gelir-gider.page.html',
  styleUrls: ['./gelir-gider.page.scss'],
})
export class GelirGiderPage implements OnInit {

  constructor(private service: SharedService, public activeRoute: ActivatedRoute) { }

  userID: number;
  dataRecv: string;

  GelirGiderList: any = [];

  ngOnInit() {

    this.dataRecv = this.activeRoute.snapshot.paramMap.get('userID');
    console.log(this.dataRecv);
    this.GelirGider();

  }


  GelirGider() {

    this.userID = +this.dataRecv;

    this.service.getGelirGiderList(this.userID).subscribe(data => {

      this.GelirGiderList = data
      console.log(this.GelirGiderList)
    })

  }
}