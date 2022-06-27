import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rev4Page } from './rev4.page';

const routes: Routes = [
  {
    path: '',
    component: Rev4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rev4PageRoutingModule {}
