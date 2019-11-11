import {Injectable} from '@angular/core';


export class Order {
    tagName: string;
    color: string;
    quantity: number;
    size: string;
    terms: boolean;
}

const ORDER = {
    tagName: '',
    color: 'powder-blue',
    quantity: 1,
    size: 'M',
    terms: false
};


@Injectable()
export class OrderServiceMock {
    getOrder(): Order {
        return ORDER;
    }
}

