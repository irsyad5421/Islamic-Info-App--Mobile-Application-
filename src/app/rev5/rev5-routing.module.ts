import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rev5Page } from './rev5.page';

const routes: Routes = [
  {
    path: '',
    component: Rev5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rev5PageRoutingModule {}
