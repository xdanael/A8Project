import { Routes } from '@angular/router';
import { EnelListComponent } from './enel-list/enel-list.component';
import { EnelEditComponent } from './enel-edit/enel-edit.component';

export const ENEL_ROUTES: Routes = [
    {
        path: 'enel',
        component: EnelListComponent
    },
    {
        path: 'enel/:id',
        component: EnelEditComponent
    }
]
