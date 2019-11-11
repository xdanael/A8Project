import {Injectable} from '@angular/core';

export class Option {
    label: string;
    value: string;
}

const OPTIONS =
    [
        { label: 'Powder blue Mock', value: 'powder-blue' },
        { label: 'Orange crush Mock ', value: 'orange-crush' },
        { label: 'Purple haze Mock', value: 'purple-haze' }
    ];



@Injectable()
export class OptionServiceMock {
    getOptions(): Option[] {
        return OPTIONS;
    }
}

