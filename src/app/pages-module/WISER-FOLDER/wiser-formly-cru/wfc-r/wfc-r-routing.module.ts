import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfcRComponent } from './wfc-r.component';


const routes: Routes = [
    {
        path: '',
        component: WfcRComponent
    },
   // { path: '/wfc-cu', loadChildren: () => import('../wfc-cu/wfc-cu.module').then(m => m.WfcCuModule) }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WfcRRoutingModule {}
