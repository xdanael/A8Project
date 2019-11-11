import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
/*** FORMLY E REACTIVE & HEADER ****/
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {PageHeaderModule, PushButtonsModule} from '../../@shared/modules';
/*** NGX ***/
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe'; // <- import OrderModule
/*** CLASS SPECIFIC ****/
import {UserRoutingModule} from './user-routing.module';
import {UserComponent} from './user.component';
/*** CHILDREN COMPONENTs ****/
import {RicercaComponent, ListaComponent} from './children/index';


@NgModule({
    imports: [CommonModule,
        UserRoutingModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        PageHeaderModule,
        PushButtonsModule,
        OrderModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
            validationMessages: [],
        }),
    ],
    declarations: [UserComponent, RicercaComponent, ListaComponent]
})
export class UserModule {
}
