import { Component, OnInit } from '@angular/core';
import {routerTransition} from '../../../@shared/animation/router.animations';


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public sliders: Array<any> = [];

    constructor() {
        this.sliders.push(
            {
                imagePath: 'assets/images/sliders/Diapositiva3.PNG',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/sliders/Diapositiva4.PNG',
                label: '',
                text: ''
            },
            {
                imagePath: 'assets/images/sliders/Diapositiva5.PNG',
                label: '',
                text: ''
            },
        );
    }

    ngOnInit() {}

    onSliderClick(value :string){
        console.log("onSliderClick" + value);
        this.sliders =  [];
        // const imgPath = 'assets/images/slider' + '' + value + '.png';
        if(value === '1'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva3.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva4.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva5.PNG',
                    label: '',
                    text: ''
                },
            );
        } else if (value === '2'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva6.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva7.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva8.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva9.PNG',
                    label: '',
                    text: ''
                },
            );
        } else if (value === '3'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva12.PNG',
                    label: '',
                    text: ''
                },
            );
        } else if (value === '4'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva13.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva14.PNG',
                    label: '',
                    text: ''
                },
            );
        }    
    }

    onClick(value :string){
        this.sliders =  [];
        // const imgPath = 'assets/images/slider' + '' + value + '.png';
        if(value === '1'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva3.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva4.PNG',
                    label: 'SITE',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva5.PNG',
                    label: '',
                    text: ''
                },
            );
        } else if (value === '2'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva6.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva7.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva8.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva9.PNG',
                    label: '',
                    text: ''
                },
            );
        } else if (value === '3'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva12.PNG',
                    label: '',
                    text: ''
                },
            );
        } else if (value === '4'){
            this.sliders.push(
                {
                    imagePath: 'assets/images/sliders/Diapositiva13.PNG',
                    label: '',
                    text: ''
                },
                {
                    imagePath: 'assets/images/sliders/Diapositiva14.PNG',
                    label: 'SITE',
                    text: ''
                },
            );
        }    
    }

}
