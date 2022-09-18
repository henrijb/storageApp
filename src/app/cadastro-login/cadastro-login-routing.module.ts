import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroLoginPage } from './cadastro-login.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroLoginPageRoutingModule {}
