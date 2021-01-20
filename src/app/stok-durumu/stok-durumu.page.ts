import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stok-durumu',
  templateUrl: './stok-durumu.page.html',
  styleUrls: ['./stok-durumu.page.scss'],
})
export class StokDurumuPage implements OnInit {

  constructor(private service: SharedService, public activeRoute: ActivatedRoute) { }

  @Input() dep: any;
  userID: number;
  dataRecv: string;
  UrunAdi: string;
  StokAdedi: number;

  StokList: any = [];

  ngOnInit() {

    this.dataRecv = this.activeRoute.snapshot.paramMap.get('userID');
    console.log(this.dataRecv);
    this.StokListFunc();

  }

  StokListFunc() {

    this.userID = +this.dataRecv;

    this.service.getStokList(this.userID).subscribe(data => {

      this.StokList = data
      console.log(this.StokList)
    })

  }

  UrunEkle() {

    console.log("button clicked")

    var val = {
      userID: this.userID,
      UrunAdi: this.UrunAdi,
      StokAdedi: this.StokAdedi
    };

    this.service.addUrunList(val).subscribe(res => {
      alert(res.toString());
    });


  }


}
