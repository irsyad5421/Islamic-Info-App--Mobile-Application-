import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SalatPage } from './salat.page';

const routes: Routes = [
  {
    path: '',
    component: SalatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalatPageRoutingModule {}
