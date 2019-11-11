import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormlyExampleRoutingModule } from './formly-example-routing.module';
import { FormlyExampleComponent } from './formly-example.component';

import { ReactiveFormsModule } from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

@NgModule({
    imports: [CommonModule,
              FormlyExampleRoutingModule,
              ReactiveFormsModule,
              FormlyModule.forRoot(),
              FormlyBootstrapModule],
    declarations: [FormlyExampleComponent]
})
export class FormlyExampleModule {}
