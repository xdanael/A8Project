import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { PagesComponent } from './pages.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { HeaderComponent } from '../components/header/header.component';
import { PagesRoutingModule} from './pages-routing.module';



@NgModule({
  declarations: [PagesComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    TranslateModule,
    NgbDropdownModule,
  ]
})
export class PagesModule { }
