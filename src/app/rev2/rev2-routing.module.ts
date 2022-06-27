import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rev2Page } from './rev2.page';

const routes: Routes = [
  {
    path: '',
    component: Rev2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rev2PageRoutingModule {}
