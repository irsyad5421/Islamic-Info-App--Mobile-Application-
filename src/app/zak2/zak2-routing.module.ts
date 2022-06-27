import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zak2Page } from './zak2.page';

const routes: Routes = [
  {
    path: '',
    component: Zak2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zak2PageRoutingModule {}
