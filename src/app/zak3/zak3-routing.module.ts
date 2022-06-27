import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Zak3Page } from './zak3.page';

const routes: Routes = [
  {
    path: '',
    component: Zak3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Zak3PageRoutingModule {}
