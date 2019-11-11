import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfbRoutingModule } from './dfb-routing.module';
import { DfbComponent } from './dfb.component';
import { PageHeaderModule, SharedPipesModule } from '../../../@shared';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// dynamic form-template builder
import {DynamicFormBuilderModule} from "./dynamic-form-builder/dynamic-form-builder.module";

@NgModule({
  declarations: [DfbComponent ],
  imports: [
    CommonModule, DynamicFormBuilderModule,
    DfbRoutingModule, PageHeaderModule, ReactiveFormsModule, FormsModule, SharedPipesModule
  ]
})
export class DfbModule { }
