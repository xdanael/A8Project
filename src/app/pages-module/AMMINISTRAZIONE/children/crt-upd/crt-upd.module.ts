import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrtUpdRoutingModule } from './crt-upd-routing.module';
import { CrtUpdComponent } from './crt-upd.component';

@NgModule({
    imports: [CommonModule, CrtUpdRoutingModule],
    declarations: [CrtUpdComponent]
})
export class CrtUpdModule {}
