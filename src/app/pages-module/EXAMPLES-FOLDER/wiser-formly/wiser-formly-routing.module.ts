import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WiserFormlyComponent } from './wiser-formly.component';

const routes: Routes = [
    {
        path: '',
        component: WiserFormlyComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WiserFormlyRoutingModule {}
