import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EidsPage } from './eids.page';

const routes: Routes = [
  {
    path: '',
    component: EidsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EidsPageRoutingModule {}
