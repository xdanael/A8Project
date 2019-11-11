import {Component, ChangeDetectorRef, ElementRef, ViewChild} from '@angular/core';
import {FormGroup, FormControl, FormBuilder, FormArray, Validators} from '@angular/forms';
import {MockForm} from "./shared/mock/mock-form";


@Component({
    selector: 'app-df-ng-switch',
    templateUrl: './df-ng-switch.component.html',
    styleUrls: ['./df-ng-switch.component.scss']
})
export class DfNgSwitchComponent {
    data = MockForm;
    title = 'dynamic-forms';
}
