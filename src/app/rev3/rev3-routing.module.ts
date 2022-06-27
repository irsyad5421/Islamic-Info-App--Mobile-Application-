import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Rev3Page } from './rev3.page';

const routes: Routes = [
  {
    path: '',
    component: Rev3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Rev3PageRoutingModule {}
