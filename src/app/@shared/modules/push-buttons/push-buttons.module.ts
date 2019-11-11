import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PushButtonsComponent } from './push-buttons.component';

/*** FAB BUTTON ***/
import {NgxFabModule} from 'ngx-fab';

@NgModule({
    imports: [CommonModule, RouterModule, NgxFabModule, NgbModule],
    declarations: [PushButtonsComponent],
    exports: [PushButtonsComponent]
})
export class PushButtonsModule {}
