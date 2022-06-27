import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Pur3Page } from './pur3.page';

const routes: Routes = [
  {
    path: '',
    component: Pur3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Pur3PageRoutingModule {}
