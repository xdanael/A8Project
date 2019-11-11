import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrtUpdComponent } from './crt-upd.component';

const routes: Routes = [
    {
        path: '',
        component: CrtUpdComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CrtUpdRoutingModule {}
