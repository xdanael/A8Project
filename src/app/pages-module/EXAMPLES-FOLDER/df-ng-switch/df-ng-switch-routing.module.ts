import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DfNgSwitchComponent} from './df-ng-switch.component';

const routes: Routes = [{
    path: '', component: DfNgSwitchComponent
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DfNgSwitchRoutingModule {
}
