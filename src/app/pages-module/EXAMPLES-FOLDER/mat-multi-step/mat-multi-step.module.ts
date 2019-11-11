import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { MatStepperModule } from '@angular/material/stepper';

import { MatMultiStepRoutingModule } from './mat-multi-step-routing.module';
import { MatMultiStepComponent } from './mat-multi-step.component';

@NgModule({
    imports: [CommonModule,
        MatMultiStepRoutingModule,
        ReactiveFormsModule,
        MatStepperModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'This field is required' },
            ],
        }),
    ],
    bootstrap: [MatMultiStepComponent],
    declarations: [MatMultiStepComponent]
})
export class MatMultiStepModule {}
