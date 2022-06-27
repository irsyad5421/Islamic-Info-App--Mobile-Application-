import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PraPage } from './pra.page';

const routes: Routes = [
  {
    path: '',
    component: PraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PraPageRoutingModule {}
