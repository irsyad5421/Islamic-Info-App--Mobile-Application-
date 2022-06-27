import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bath1Page } from './bath1.page';

const routes: Routes = [
  {
    path: '',
    component: Bath1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bath1PageRoutingModule {}
