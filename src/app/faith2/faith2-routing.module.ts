import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Faith2Page } from './faith2.page';

const routes: Routes = [
  {
    path: '',
    component: Faith2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Faith2PageRoutingModule {}
