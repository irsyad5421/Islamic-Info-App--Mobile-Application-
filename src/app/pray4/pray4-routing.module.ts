import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pray4Page } from './pray4.page';

const routes: Routes = [
  {
    path: '',
    component: Pray4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pray4PageRoutingModule {}
