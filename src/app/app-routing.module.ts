import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './@shared';

const routes: Routes = [
    { path: '', loadChildren: () => import('./@core/ex-container/pages.module').then(m => m.PagesModule), canActivate: [AuthGuard] },
    { path: 'login', loadChildren: () => import('./@core/auth-module/login/login.module').then(m => m.LoginModule) },
    { path: 'signup', loadChildren: () => import('./@core/auth-module/signup/signup.module').then(m => m.SignupModule) },
    { path: 'error', loadChildren: () => import('./@core/auth-module/server-error/server-error.module').then(m => m.ServerErrorModule) },
    { path: 'access-denied', loadChildren: () => import('./@core/auth-module/access-denied/access-denied.module').then(m => m.AccessDeniedModule) },
    { path: 'not-found', loadChildren: () => import('./@core/auth-module/not-found/not-found.module').then(m => m.NotFoundModule) },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    // imports: [RouterModule.forRoot(routes, { useHash: false })],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
