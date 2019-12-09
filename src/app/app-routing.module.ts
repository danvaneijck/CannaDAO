import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'new-crop',
    loadChildren: () => import('./new-crop/new-crop.module').then( m => m.NewCropPageModule)
  },
  {
    path: 'crop-details',
    loadChildren: () => import('./crop-details/crop-details.module').then( m => m.CropDetailsPageModule)
  },
  {
    path: 'new-proposal',
    loadChildren: () => import('./new-proposal/new-proposal.module').then( m => m.NewProposalPageModule)
  },
  {
    path: 'proposal-details',
    loadChildren: () => import('./proposal-details/proposal-details.module').then( m => m.ProposalDetailsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
