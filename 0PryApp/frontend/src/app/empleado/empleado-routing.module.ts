import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//const loginModule = () => import('./login/login.module').then(x => x.LoginModule);

const routes: Routes = [

//solo rutas, no el empleado componete

    // { path: 'login', component: LoginComponent },


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
