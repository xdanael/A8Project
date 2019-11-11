import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WiserFormlyRoutingModule } from './wiser-formly-routing.module';
import { WiserFormlyComponent } from './wiser-formly.component';

import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import { WiserApiServiceMock } from '../../../@shared/mocks/wiser.mock.service';
import {PageHeaderModule} from '../../../@shared/modules';
import {SchemaService} from './form-schema/schema.service';

@NgModule({
    imports: [CommonModule, WiserFormlyRoutingModule,
        ReactiveFormsModule,
        PageHeaderModule,
        FormlyModule.forRoot(),
        FormlyBootstrapModule],
    declarations: [WiserFormlyComponent],
    providers: [
        WiserApiServiceMock,
        SchemaService
    ]
})
export class WiserFormlyModule {}
