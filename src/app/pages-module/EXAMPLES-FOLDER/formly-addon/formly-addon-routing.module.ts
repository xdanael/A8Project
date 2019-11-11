import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormlyAddonComponent } from './formly-addon.component';

const routes: Routes = [
    {
        path: '',
        component: FormlyAddonComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormlyAddonRoutingModule {}
