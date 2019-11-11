import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EnelListComponent } from './enel-list/enel-list.component';
import { EnelEditComponent } from './enel-edit/enel-edit.component';
import { EnelService } from './enel.service';
import { ENEL_ROUTES } from './enel.routes';
import { PageHeaderModule } from '../../../@shared';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    PageHeaderModule,
    RouterModule.forChild(ENEL_ROUTES)
  ],
  declarations: [
    EnelListComponent,
    EnelEditComponent
  ],
  providers: [
    EnelService
  ],
  exports: [
  ]
})
export class EnelModule { }
