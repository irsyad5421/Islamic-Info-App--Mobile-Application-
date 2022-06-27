import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Abl2Page } from './abl2.page';

const routes: Routes = [
  {
    path: '',
    component: Abl2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Abl2PageRoutingModule {}
