import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurPage } from './pur.page';

const routes: Routes = [
  {
    path: '',
    component: PurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurPageRoutingModule {}
