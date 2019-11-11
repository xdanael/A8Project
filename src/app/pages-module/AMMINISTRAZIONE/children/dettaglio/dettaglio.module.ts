import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DettaglioRoutingModule } from './dettaglio-routing.module';
import { DettaglioComponent } from './dettaglio.component';

import {PageHeaderModule, PushButtonsModule} from '../../../../@shared/modules';

@NgModule({
    imports: [CommonModule, DettaglioRoutingModule,
        PageHeaderModule,
        PushButtonsModule,],
    declarations: [DettaglioComponent]
})
export class DettaglioModule {}
