import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankPageRoutingModule } from './blank-page-routing.module';
import { BlankPageComponent } from './blank-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {PageHeaderModule} from '../../../@shared/modules';


import {FormlyModule} from '@ngx-formly/core';
import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';



@NgModule({
    imports: [CommonModule, BlankPageRoutingModule, PageHeaderModule, ReactiveFormsModule, FormsModule],
    declarations: [BlankPageComponent]
})
export class BlankPageModule {}
