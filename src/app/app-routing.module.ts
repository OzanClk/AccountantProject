import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login/',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login/:userID',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'profil/:userID',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'gelir-gider/:userID',
    loadChildren: () => import('./gelir-gider/gelir-gider.module').then( m => m.GelirGiderPageModule)
  },
  {
    path: 'odemeler/:userID',
    loadChildren: () => import('./odemeler/odemeler.module').then( m => m.OdemelerPageModule)
  },
  {
    path: 'stok-durumu/:userID',
    loadChildren: () => import('./stok-durumu/stok-durumu.module').then( m => m.StokDurumuPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
