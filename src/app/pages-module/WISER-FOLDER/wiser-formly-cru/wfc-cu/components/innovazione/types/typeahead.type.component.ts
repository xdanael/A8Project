import {Component, EventEmitter, OnDestroy, OnInit} from '@angular/core';
import {FieldType} from '@ngx-formly/core';
import {Subject} from 'rxjs';
import {takeUntil, startWith, filter, debounceTime, distinctUntilChanged, switchMap  } from 'rxjs/operators';

@Component({
    selector: 'app-field-typeahead',
    template: `
        <label>Select a state</label>
        <ng-select
                class="form-control"
                [items]="options$ | async"
                [placeholder]="to.placeholder"
                [typeahead]="search$"
                [formControl]="formControl"
        >
        </ng-select>
    `,
    styleUrls: ['./typeahead.type.component.scss']
})
export class FormlyFieldTypeaheadComponent extends FieldType implements OnDestroy, OnInit {
    onDestroy$ = new Subject<void>();
    search$ = new EventEmitter();
    options$;

    ngOnInit() {
        this.options$ = this.search$.pipe(
            takeUntil(this.onDestroy$),
            startWith(''),
            filter(v => v !== null),
            debounceTime(200),
            distinctUntilChanged(),
            switchMap(this.to.search$)
        );

        this.options$.subscribe();
    }

    ngOnDestroy() {
        this.onDestroy$.complete();
    }
}
