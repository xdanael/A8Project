import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfNgSwitchRoutingModule } from './df-ng-switch-routing.module';
import { DfNgSwitchComponent } from './df-ng-switch.component';
import { PageHeaderModule, SharedPipesModule } from '../../../@shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from "./dynamic-form/dynamic-form.component";


@NgModule({
  declarations: [DfNgSwitchComponent, DynamicFormComponent ],
  imports: [
    CommonModule,
    DfNgSwitchRoutingModule, PageHeaderModule, ReactiveFormsModule, FormsModule, SharedPipesModule
  ]
})
export class DfNgSwitchModule { }
