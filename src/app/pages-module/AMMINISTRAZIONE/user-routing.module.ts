import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserComponent} from './user.component';



const routes: Routes = [
    {
        path: '',
        component: UserComponent
    },
    { path: 'detail', loadChildren: () => import('../../pages-module/AMMINISTRAZIONE/children/dettaglio/dettaglio.module').then(m => m.DettaglioModule)},
    { path: 'create', loadChildren: () => import('../../pages-module/AMMINISTRAZIONE/children/crt-upd/crt-upd.module').then(m => m.CrtUpdModule) },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
