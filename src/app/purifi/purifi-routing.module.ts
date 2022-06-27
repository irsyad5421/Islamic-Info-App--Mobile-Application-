import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PurifiPage } from './purifi.page';

const routes: Routes = [
  {
    path: '',
    component: PurifiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurifiPageRoutingModule {}
