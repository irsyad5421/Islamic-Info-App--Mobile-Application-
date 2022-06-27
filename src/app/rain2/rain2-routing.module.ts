import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rain2Page } from './rain2.page';

const routes: Routes = [
  {
    path: '',
    component: Rain2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rain2PageRoutingModule {}
