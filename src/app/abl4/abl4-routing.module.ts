import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abl4Page } from './abl4.page';

const routes: Routes = [
  {
    path: '',
    component: Abl4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abl4PageRoutingModule {}
