import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TirmidhiPage } from './tirmidhi.page';

const routes: Routes = [
  {
    path: '',
    component: TirmidhiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TirmidhiPageRoutingModule {}
