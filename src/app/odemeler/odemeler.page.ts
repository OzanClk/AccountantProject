import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-odemeler',
  templateUrl: './odemeler.page.html',
  styleUrls: ['./odemeler.page.scss'],
})
export class OdemelerPage implements OnInit {

  constructor(private service: SharedService, public activeRoute: ActivatedRoute) { }

  userID: number;
  dataRecv: string;

  OdemeList: any = [];

  
  ngOnInit() {

    this.dataRecv = this.activeRoute.snapshot.paramMap.get('userID');
    console.log(this.dataRecv);
    this.OdemelerList();

  }

  OdemelerList() {

    this.userID = +this.dataRecv;

    this.service.getOdemeList(this.userID).subscribe(data => {

      this.OdemeList = data
      console.log(this.OdemeList)
    })

  }


}
