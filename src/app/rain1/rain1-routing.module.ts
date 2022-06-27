import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rain1Page } from './rain1.page';

const routes: Routes = [
  {
    path: '',
    component: Rain1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rain1PageRoutingModule {}
