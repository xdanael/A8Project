import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTabRoutingModule } from './mat-tab-routing.module';
import { MatTabComponent } from './mat-tab.component';

import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';
import {PageHeaderModule} from '../../../@shared/modules';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
    imports: [CommonModule, MatTabRoutingModule,
        ReactiveFormsModule,
        MatTabsModule,
        PageHeaderModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'This field is required' },
            ],
        }),
    ],
    declarations: [MatTabComponent]
})
export class MatTabModule {}
