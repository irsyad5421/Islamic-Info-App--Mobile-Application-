import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Faith4Page } from './faith4.page';

const routes: Routes = [
  {
    path: '',
    component: Faith4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Faith4PageRoutingModule {}
