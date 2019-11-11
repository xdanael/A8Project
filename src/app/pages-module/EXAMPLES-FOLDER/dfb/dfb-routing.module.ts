import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DfbComponent} from './dfb.component';

const routes: Routes = [{
    path: '', component: DfbComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DfbRoutingModule {
}
