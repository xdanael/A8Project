import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EnelService} from '../enel.service';
import {Enel, CompanyInfo} from '../enel';
import {map, switchMap} from 'rxjs/operators';
import {Location} from '@angular/common';
import {of} from 'rxjs';


@Component({
    selector: 'enel-edit',
    templateUrl: './enel-edit.component.html',
    styleUrls: ['enel-edit.component.scss']
})
export class EnelEditComponent implements OnInit {

    id: string;
    enel: Enel;
    companyInfo: CompanyInfo = new CompanyInfo();
    errors: string;
    checkCU: string;

    constructor(
        private route: ActivatedRoute,
        private enelService: EnelService,
        private location: Location) {
    }

    ngOnInit() {
        this
            .route
            .params
            .pipe(
                map(p => p['id']),
                switchMap(id => {
                    if (id === 'new') {
                        this.checkCU = 'C';
                        return of(new Enel());
                    } else {
                        this.checkCU = 'U';
                        return this.enelService.findById(id);
                    }
                })
            )
            .subscribe(
                enel => {
                    this.enel = enel;
                    if (this.enel.id !== undefined) {
                        this.companyInfo = enel.companyInfo;
                    }
                    this.errors = '';
                },
                err => {
                    this.errors = 'Error loading';
                }
            );
    }

    save() {
        this.enel.companyInfo = this.companyInfo;

        this.enelService.save(this.enel).subscribe(
            enel => {
                this.enel = enel;
                this.errors = 'Save was successful!';
            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }

    update() {
        this.enelService.edit(this.enel).subscribe(
            enel => {
                this.enel = enel;

            },
            err => {
                this.errors = 'Error saving';
            }
        );
    }


    goBack(): void {
        this.location.back();
    }
}
