import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MannerPage } from './manner.page';

const routes: Routes = [
  {
    path: '',
    component: MannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MannerPageRoutingModule {}
