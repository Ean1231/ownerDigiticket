import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ManageDriversPageRoutingModule } from './manage-drivers-routing.module';

import { ManageDriversPage } from './manage-drivers.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ManageDriversPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ManageDriversPage]
})
export class ManageDriversPageModule {}
