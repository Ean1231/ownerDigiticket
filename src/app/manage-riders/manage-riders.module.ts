import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ManageRidersPageRoutingModule } from './manage-riders-routing.module';

import { ManageRidersPage } from './manage-riders.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageRidersPageRoutingModule
  ],
  declarations: [ManageRidersPage]
})
export class ManageRidersPageModule {}
