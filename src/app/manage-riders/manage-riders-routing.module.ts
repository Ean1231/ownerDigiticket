import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageRidersPage } from './manage-riders.page';

const routes: Routes = [
  {
    path: '',
    component: ManageRidersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageRidersPageRoutingModule {}
