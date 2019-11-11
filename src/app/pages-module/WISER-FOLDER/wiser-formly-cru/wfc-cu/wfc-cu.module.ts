import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { WfcCuRoutingModule } from './wfc-cu-routing.module';
import { WfcCuComponent } from './wfc-cu.component';
/***FORMLY E REACTIVE****/
import {ReactiveFormsModule} from '@angular/forms';
import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

import { MatCardModule } from '@angular/material';
import { NgSelectModule } from '@ng-select/ng-select';
import {FormlyFieldTypeaheadComponent} from './components/innovazione/types/typeahead.type.component';
/***MATERIAL ***/
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
/***SERVICES, HEADER e SCHEMA DEL FORM****/
import { WiserApiServiceMock } from '../../../../@shared/mocks/wiser.mock.service';
import {PageHeaderModule} from '../../../../@shared/modules';
import {SchemaService} from '../form-schema/schema.service';

import {
    ModalComponent, ModalChartComponent, ModalChartsComponent, CertificazioniComponent,
    AssettoManagerialeComponent, InnovazioneComponent, SostenibilitaComponent, BilancioComponent
} from './components';
import {NgbModalModule} from '@ng-bootstrap/ng-bootstrap';
import {ChartsModule as Ng2Charts } from 'ng2-charts';




@NgModule({
    imports: [CommonModule, WfcCuRoutingModule,
        ReactiveFormsModule,
        NgbModalModule,
        Ng2Charts,
        MatStepperModule,
        MatInputModule,
        MatAutocompleteModule,
        PageHeaderModule,
        FormlyBootstrapModule,
        NgSelectModule,
        NgbModule,
        FormlyModule.forRoot({
            validationMessages: [
                { name: 'required', message: 'Campo obbligatorio' },
            ],
            types: [
                { name: 'typeahead', component: FormlyFieldTypeaheadComponent }
            ]
        }),
       ],
    bootstrap: [WfcCuComponent],
    declarations: [WfcCuComponent,
        ModalComponent,
        ModalChartComponent,
        ModalChartsComponent,
        CertificazioniComponent,
        AssettoManagerialeComponent,
        InnovazioneComponent,
        SostenibilitaComponent,
        BilancioComponent,
        FormlyFieldTypeaheadComponent],
    providers: [
        WiserApiServiceMock,
        SchemaService
    ]
})
export class WfcCuModule {}
