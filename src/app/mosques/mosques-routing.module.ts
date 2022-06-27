import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MosquesPage } from './mosques.page';

const routes: Routes = [
  {
    path: '',
    component: MosquesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MosquesPageRoutingModule {}
