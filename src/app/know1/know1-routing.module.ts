import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Know1Page } from './know1.page';

const routes: Routes = [
  {
    path: '',
    component: Know1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Know1PageRoutingModule {}
