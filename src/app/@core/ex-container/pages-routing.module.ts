import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';


const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'charts', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/charts/charts.module').then(m => m.ChartsModule) },
            { path: 'tables', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/tables/tables.module').then(m => m.TablesModule) },
            { path: 'forms', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/form-template/form.module').then(m => m.FormModule) },
            { path: 'bs-element', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/bs-element/bs-element.module').then(m => m.BsElementModule) },
            { path: 'grid', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/grid/grid.module').then(m => m.GridModule) },
            { path: 'components', loadChildren: () => import('../../pages-module/EXAMPLES-FOLDER/bs-component/bs-component.module').then(m => m.BsComponentModule) },
            // SUITE WISER
            { path: 'wfc-cu', loadChildren: () => import('../../pages-module/WISER-FOLDER/wiser-formly-cru/wfc-cu/wfc-cu.module').then(m => m.WfcCuModule) },
            { path: 'wfc-r', loadChildren: () => import('../../pages-module/WISER-FOLDER/wiser-formly-cru/wfc-r/wfc-r.module').then(m => m.WfcRModule) },
            // SUITE APP
            { path: 'admin-user', loadChildren: () => import('../../pages-module/AMMINISTRAZIONE/user.module').then(m => m.UserModule) },
         //   { path: 'admin-user/detail', loadChildren: () => import('../../pages-module/AMMINISTRAZIONE/children/dettaglio/dettaglio.module').then(m => m.DettaglioModule)},
         //   { path: 'admin-user/create', loadChildren: () => import('../../pages-module/AMMINISTRAZIONE/children/crt-upd/crt-upd.module').then(m => m.CrtUpdModule) },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}
