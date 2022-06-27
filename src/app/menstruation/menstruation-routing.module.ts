import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenstruationPage } from './menstruation.page';

const routes: Routes = [
  {
    path: '',
    component: MenstruationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenstruationPageRoutingModule {}
