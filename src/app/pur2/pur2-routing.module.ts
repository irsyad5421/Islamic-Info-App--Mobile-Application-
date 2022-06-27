import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pur2Page } from './pur2.page';

const routes: Routes = [
  {
    path: '',
    component: Pur2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pur2PageRoutingModule {}
