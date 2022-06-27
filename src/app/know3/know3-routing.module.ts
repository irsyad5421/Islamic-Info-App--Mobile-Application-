import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Know3Page } from './know3.page';

const routes: Routes = [
  {
    path: '',
    component: Know3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Know3PageRoutingModule {}
