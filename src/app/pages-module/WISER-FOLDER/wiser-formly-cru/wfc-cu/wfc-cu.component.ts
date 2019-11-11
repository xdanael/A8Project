import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {routerTransition} from '../../../../@shared/animation/router.animations';
import { FormArray, FormGroup} from '@angular/forms';
import {FormlyFormOptions, FormlyFieldConfig} from '@ngx-formly/core';
import {WiserAPI} from '../class/WiserAPI';
import {WiserApiServiceMock} from '../../../../@shared/mocks/wiser.mock.service';
import {SchemaService} from '../form-schema/schema.service';
import {TabType} from '../interfaces/TabType';
import {StepType} from '../interfaces/StepType';
import {filter, map, switchMap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {Location} from '@angular/common';
import {ActivatedRoute, NavigationStart, Router} from '@angular/router';


@Component({
    selector: 'app-wfc-dettaglio',
    templateUrl: './wfc-cu.component.html',
    styleUrls: ['./wfc-cu.component.scss'],
    animations: [routerTransition()]
})
export class WfcCuComponent implements OnInit {
    currentOrientation = 'horizontal'; // vertical  horizontal
    model: WiserAPI;
    // model = {};

    // tabs: TabType[];
    steps: StepType[];
    activedStep = 0;

    /***sostuire array di tabs o steps***/
    form;
    options;
    errors: string;
    isDisabled: boolean;


    tab1IsVisible: boolean;

    constructor( private activatedRoute: ActivatedRoute,
                 public router: Router,
                 private location: Location,
                 private schemaService: SchemaService,
                 private wiserApiServiceMock: WiserApiServiceMock) {
    }

    ngOnInit() {
       // console.log(history.state);
       // console.log(this.location.getState());
        this.tab1IsVisible = false;
        this.model = history.state;
        if (this.model.companyInfo === undefined) {
            console.log('NEW FIELD');
            this.isDisabled = false;
            this.model = new WiserAPI();
        } else {
            console.log('EXISTING FIELD');
            this.isDisabled = true;
        }



        /**Carico Model MOCK**/
        // this.model = this.wiserApiServiceMock.getWiser();

        /***MATERIAL STEPS***/
        this.steps = this.schemaService.getStepSchema();
        this.form = new FormArray(this.steps.map(() => new FormGroup({})));
        this.options = this.steps.map(() => <FormlyFormOptions>{ formState: {disabled: this.isDisabled}});
        /***MATERIAL STEPS***/

        /***MATERIAL TABS***/
        // this.tabs  = this.schemaService.getTabSchema();
        // this.form = new FormArray(this.steps.map(() => new FormGroup({})));
        // this.options = this.steps.map(() => <FormlyFormOptions>{});
        /***MATERIAL TABS***/
    }


    prevStep(step) {
        this.activedStep = step - 1;
    }

    nextStep(step) {
        this.activedStep = step + 1;
    }

    submit() {
       alert(JSON.stringify(this.model));
    }

    goBack(): void {
        this.location.back();
    }

    showTab1(){
        this.tab1IsVisible = true;
    }


}
