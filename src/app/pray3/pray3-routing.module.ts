import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pray3Page } from './pray3.page';

const routes: Routes = [
  {
    path: '',
    component: Pray3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pray3PageRoutingModule {}
