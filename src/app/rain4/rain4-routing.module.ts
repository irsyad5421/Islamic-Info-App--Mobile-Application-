import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rain4Page } from './rain4.page';

const routes: Routes = [
  {
    path: '',
    component: Rain4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rain4PageRoutingModule {}
