import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WfcRRoutingModule } from './wfc-r-routing.module';
import { WfcRComponent } from './wfc-r.component';
/***FORMLY E REACTIVE****/
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {PageHeaderModule} from '../../../../@shared/modules';
import {SchemaService} from '../form-schema/schema.service';
import {WiserApiServiceMock} from '../../../../@shared/mocks/wiser.mock.service';
import { NgxPaginationModule } from 'ngx-pagination';




@NgModule({
    imports: [CommonModule, WfcRRoutingModule, NgxPaginationModule,
        ReactiveFormsModule,
        PageHeaderModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'Campo obbligatorio' },
            ],
        }),
    ],
    bootstrap: [WfcRComponent],
    declarations: [WfcRComponent ],
    providers: [
        WiserApiServiceMock,
        SchemaService
    ]
})
export class WfcRModule {}
