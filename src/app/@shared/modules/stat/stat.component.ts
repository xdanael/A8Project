import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() slide: string;
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() sliderClick: EventEmitter<string> = new EventEmitter();

    constructor() {}

    ngOnInit() {}

    showSlide(slide : string){
        this.sliderClick.emit(slide);
    }
}
