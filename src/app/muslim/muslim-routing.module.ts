import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MuslimPage } from './muslim.page';

const routes: Routes = [
  {
    path: '',
    component: MuslimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MuslimPageRoutingModule {}
