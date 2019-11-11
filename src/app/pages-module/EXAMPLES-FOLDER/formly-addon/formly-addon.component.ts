import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';
import {routerTransition} from '../../../@shared/animation/router.animations';

import {OrderServiceMock} from '../../../@shared/mocks/order.mock.service';
import {SchemaService} from './form-schema/schema.service';


@Component({
    selector: 'app-formly-addon',
    templateUrl: './formly-addon.component.html',
    styleUrls: ['./formly-addon.component.scss'],
    animations: [routerTransition()]
})
export class FormlyAddonComponent implements OnInit {
    orderForm = new FormGroup({});
    order: any = this.orderMock.getOrder();
    orderFields: FormlyFieldConfig[] = this.schemaService.getFormSchema();

    constructor(private schemaService: SchemaService,
                private orderMock: OrderServiceMock) {
    }

    ngOnInit() {
        /**Caricare Model e Form sull On Init**/

    }

    onSubmit(orderInfo) {
        alert(JSON.stringify(orderInfo));
    }

}
