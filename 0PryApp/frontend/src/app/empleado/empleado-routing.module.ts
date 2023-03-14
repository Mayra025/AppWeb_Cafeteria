import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EcrearComponent } from './crear/ecrear.component';

const routes: Routes = [

    { path: 'ecrear', component: EcrearComponent }


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class EmpleadoRoutingModule { }
