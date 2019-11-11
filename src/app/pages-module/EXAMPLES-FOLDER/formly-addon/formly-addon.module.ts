import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FormlyAddonRoutingModule} from './formly-addon-routing.module';
import {FormlyAddonComponent} from './formly-addon.component';

import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {PageHeaderModule} from '../../../@shared';
import {OrderServiceMock} from '../../../@shared/mocks/order.mock.service';
import {OptionServiceMock} from './form-schema/options.service';
import {SchemaService} from './form-schema/schema.service';


@NgModule({
    imports: [CommonModule,
        FormlyAddonRoutingModule,
        ReactiveFormsModule,
        PageHeaderModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule],
    declarations: [FormlyAddonComponent],
    providers: [
        OrderServiceMock,
        OptionServiceMock,
        SchemaService
    ]
})
export class FormlyAddonModule {
}
