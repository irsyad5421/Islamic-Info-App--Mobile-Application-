import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bel3Page } from './bel3.page';

const routes: Routes = [
  {
    path: '',
    component: Bel3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bel3PageRoutingModule {}
