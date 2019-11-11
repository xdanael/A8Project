import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageHeaderModule, SharedPipesModule} from '../../../@shared';

import {TestingComponent} from './testing.component';
import {TestingRoutingModule} from './testing-routing.module';

import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

@NgModule({
    declarations: [TestingComponent],
    imports: [
        CommonModule,
        FormlyBootstrapModule,
        TestingRoutingModule,
        PageHeaderModule,
        ReactiveFormsModule,
        SharedPipesModule,
        FormlyModule.forRoot(),
    ]
})
export class TestingModule {
}
