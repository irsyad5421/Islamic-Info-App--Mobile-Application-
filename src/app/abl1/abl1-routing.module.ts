import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abl1Page } from './abl1.page';

const routes: Routes = [
  {
    path: '',
    component: Abl1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abl1PageRoutingModule {}
