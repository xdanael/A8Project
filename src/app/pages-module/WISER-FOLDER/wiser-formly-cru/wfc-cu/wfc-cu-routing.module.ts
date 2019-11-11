import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WfcCuComponent } from './wfc-cu.component';

const routes: Routes = [
    {
        path: '',
        component: WfcCuComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WfcCuRoutingModule {}
