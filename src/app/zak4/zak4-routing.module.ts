import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zak4Page } from './zak4.page';

const routes: Routes = [
  {
    path: '',
    component: Zak4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zak4PageRoutingModule {}
