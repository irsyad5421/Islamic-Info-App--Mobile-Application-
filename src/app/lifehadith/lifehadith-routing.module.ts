import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LifehadithPage } from './lifehadith.page';

const routes: Routes = [
  {
    path: '',
    component: LifehadithPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LifehadithPageRoutingModule {}
