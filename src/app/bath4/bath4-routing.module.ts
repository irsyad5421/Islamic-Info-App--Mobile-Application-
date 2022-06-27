import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bath4Page } from './bath4.page';

const routes: Routes = [
  {
    path: '',
    component: Bath4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bath4PageRoutingModule {}
