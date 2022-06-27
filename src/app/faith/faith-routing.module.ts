import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaithPage } from './faith.page';

const routes: Routes = [
  {
    path: '',
    component: FaithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaithPageRoutingModule {}
