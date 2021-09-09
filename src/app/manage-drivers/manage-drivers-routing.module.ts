import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageDriversPage } from './manage-drivers.page';

const routes: Routes = [
  {
    path: '',
    component: ManageDriversPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManageDriversPageRoutingModule {}
