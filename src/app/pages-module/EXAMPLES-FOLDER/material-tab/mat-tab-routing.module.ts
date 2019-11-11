import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatTabComponent } from './mat-tab.component';

const routes: Routes = [
    {
        path: '',
        component: MatTabComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MatTabRoutingModule {}
