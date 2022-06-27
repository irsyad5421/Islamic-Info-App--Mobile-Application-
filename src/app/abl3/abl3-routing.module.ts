import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abl3Page } from './abl3.page';

const routes: Routes = [
  {
    path: '',
    component: Abl3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abl3PageRoutingModule {}
