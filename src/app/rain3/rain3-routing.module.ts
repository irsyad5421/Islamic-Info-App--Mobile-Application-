import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rain3Page } from './rain3.page';

const routes: Routes = [
  {
    path: '',
    component: Rain3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rain3PageRoutingModule {}
