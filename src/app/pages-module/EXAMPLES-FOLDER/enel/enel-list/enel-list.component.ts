import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EnelFilter } from '../enel-filter';
import { EnelService } from '../enel.service';
import { Enel } from '../enel';
import { routerTransition } from '../../../../@shared/animation/router.animations';


@Component({
    selector: 'enel',
    templateUrl: 'enel-list.component.html',
    styleUrls:  ['enel-list.component.scss'],
    animations: [routerTransition()]
})
export class EnelListComponent {

    filter = new EnelFilter();
    selectedEnel: Enel;

    get enelList(): Enel[] {
        return this.enelService.enelList;
    }

    constructor(private enelService: EnelService) {
    }

    ngOnInit() {
        this.enelService.load(this.filter);
    }

    search(): void {
        this.enelService.load(this.filter);
    }

    select(selected: Enel): void {
        this.selectedEnel = selected;
    }

    delete(selected: Enel): void {
        this.enelService.delete(selected).subscribe((res: any) => {
            this.ngOnInit();
        }, error => {

        });
    }

}
