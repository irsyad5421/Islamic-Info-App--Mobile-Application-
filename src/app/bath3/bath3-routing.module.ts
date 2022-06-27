import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Bath3Page } from './bath3.page';

const routes: Routes = [
  {
    path: '',
    component: Bath3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Bath3PageRoutingModule {}
