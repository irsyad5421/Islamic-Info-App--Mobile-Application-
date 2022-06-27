import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AblutionPage } from './ablution.page';

const routes: Routes = [
  {
    path: '',
    component: AblutionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AblutionPageRoutingModule {}
