import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {FormArray, FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import { OrderPipe } from 'ngx-order-pipe';
import {User} from '../../classes/User';


@Component({
    selector: 'app-admin-user-list',
    templateUrl: './lista.component.html',
    styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
    order = 'info.name';
    reverse = false;
    users: User[] = [];
    sortedCollection: any[];
    constructor(private orderPipe: OrderPipe) {
        this.sortedCollection = orderPipe.transform(this.users, 'lastname');
        console.log(this.sortedCollection);
    }
    setOrder(value: string) {
        if (this.order === value) {
            this.reverse = !this.reverse;
        }
        this.order = value;
    }
    ngOnInit() {
        this.users = [{
            id: 1,
            name: 'ASTOLFO',
            lastname: 'STOLFO',
            email: 'st@gmail.com',
            fiscalcode: '111111',
            province: 'ROMA',
            phone: '56789',
            age: 34
        },
        {
            id: 2,
            name: 'GANDOLFO',
            lastname: 'GASTOLFO',
            email: 'gst@gmail.com',
            fiscalcode: '456788',
            province: 'BARI',
            phone: '45353',
            age: 54
        },
        {
                id: 3, name: 'MANDOLFO',
                lastname: 'MASTOPIETRO',
                email: 'mp@gmail.com',
                fiscalcode: '33242',
                province: 'MILANO',
                phone: '6543',
                age: 45
         }];
    }
}
