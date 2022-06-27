import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Puri3Page } from './puri3.page';

const routes: Routes = [
  {
    path: '',
    component: Puri3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Puri3PageRoutingModule {}
