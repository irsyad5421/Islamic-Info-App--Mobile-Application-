import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurifPage } from './purif.page';

const routes: Routes = [
  {
    path: '',
    component: PurifPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurifPageRoutingModule {}
