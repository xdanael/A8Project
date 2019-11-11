import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatMultiStepComponent } from './mat-multi-step.component';

const routes: Routes = [
    {
        path: '',
        component: MatMultiStepComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatMultiStepRoutingModule {}
