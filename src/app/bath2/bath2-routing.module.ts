import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bath2Page } from './bath2.page';

const routes: Routes = [
  {
    path: '',
    component: Bath2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bath2PageRoutingModule {}
