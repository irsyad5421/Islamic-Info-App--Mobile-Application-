import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlsalatPage } from './alsalat.page';

const routes: Routes = [
  {
    path: '',
    component: AlsalatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlsalatPageRoutingModule {}
