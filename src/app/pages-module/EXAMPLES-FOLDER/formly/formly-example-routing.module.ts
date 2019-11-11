import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormlyExampleComponent } from './formly-example.component';

const routes: Routes = [
    {
        path: '',
        component: FormlyExampleComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class FormlyExampleRoutingModule {}
