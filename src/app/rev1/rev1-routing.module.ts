import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rev1Page } from './rev1.page';

const routes: Routes = [
  {
    path: '',
    component: Rev1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rev1PageRoutingModule {}
