import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Vol3Page } from './vol3.page';

const routes: Routes = [
  {
    path: '',
    component: Vol3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Vol3PageRoutingModule {}
