import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultaPageComponent } from './consulta-page/consulta-page.component';
import { LoginFormComponent } from './login-form/login-form.component';

const routes: Routes = [
  {path:'',component:LoginFormComponent},
  {path:'Cep', component:ConsultaPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
