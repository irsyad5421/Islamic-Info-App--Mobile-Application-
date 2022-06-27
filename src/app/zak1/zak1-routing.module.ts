import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zak1Page } from './zak1.page';

const routes: Routes = [
  {
    path: '',
    component: Zak1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zak1PageRoutingModule {}
