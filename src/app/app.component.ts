import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;

  public dataRecv = this.activeRoute.snapshot.paramMap.get('userID');

  public appPages = [
    {
      title: 'Profil',
      url: 'profil/1',
      icon: 'person'
    },
    {
      title: 'Gelir-Gider',
      url: 'gelir-gider/1',
      icon: 'analytics'
    },
    {
      title: 'Ödemeler',
      url: 'odemeler/1',
      icon: 'paper-plane'
    },
    {
      title: 'Stok Bilgisi',
      url: 'stok-durumu/1',
      icon: 'cube'
    }
  ];
  

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public activeRoute: ActivatedRoute
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.router.navigateByUrl('');
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
