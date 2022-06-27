import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Faith3Page } from './faith3.page';

const routes: Routes = [
  {
    path: '',
    component: Faith3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Faith3PageRoutingModule {}
