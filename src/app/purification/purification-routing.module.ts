import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurificationPage } from './purification.page';

const routes: Routes = [
  {
    path: '',
    component: PurificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurificationPageRoutingModule {}
