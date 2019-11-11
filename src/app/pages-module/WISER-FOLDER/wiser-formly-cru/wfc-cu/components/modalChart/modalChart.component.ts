import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';

@Component({
    selector: 'app-modal-chart',
    templateUrl: './modalChart.component.html',
    styleUrls: ['./modalChart.component.scss']
})
export class ModalChartComponent {
    // bar chart
    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = [
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012'
    ];
    public barChartType: string;
    public barChartLegend: boolean;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];

    // Doughnut
    public doughnutChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail-Order Sales'
    ];
    public doughnutChartData: number[] = [350, 450, 100];
    public doughnutChartType: string;

    // Radar
    public radarChartLabels: string[] = [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running'
    ];
    public radarChartData: any = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: string;

    // Pie
    public pieChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales'
    ];
    public pieChartData: number[] = [300, 500, 100];
    public pieChartType: string;

    // PolarArea
    public polarAreaChartLabels: string[] = [
        'Download Sales',
        'In-Store Sales',
        'Mail Sales',
        'Telesales',
        'Corporate Sales'
    ];
    public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
    public polarAreaLegend: boolean;

    public polarAreaChartType: string;

    // lineChart
    public lineChartData: Array<any> = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    public lineChartLabels: Array<any> = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ];
    public lineChartOptions: any = {
        responsive: true
    };
    public lineChartColors: Array<any> = [
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        {
            // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        {
            // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    public lineChartLegend: boolean;
    public lineChartType: string;
    closeResult: string;
    // Lista grafici
    listaGrafici: any = ['Bar', 'Doughnut', 'Radar', 'Pie', 'PolarArea' , 'Line'  ];
    constructor(private modalService: NgbModal, public fb: FormBuilder) {}

    pieVisible: boolean;
    doughnutVisible: boolean;
    radarVisible: boolean;
    polarVisible: boolean;
    lineVisible: boolean;
    barVisible: boolean;
    tipoGrafico: string;

    graficiForm = this.fb.group({
        name: ['']
    });

    resetBooleans() {
        this.pieVisible = false;
        this.doughnutVisible = false;
        this.radarVisible = false;
        this.polarVisible = false;
        this.lineVisible = false;
        this.barVisible = false;
    }

    onOptionsSelected(value: string, content) {
        console.log( value);
        this.resetBooleans();
        this.tipoGrafico = value;
        if (value === 'Pie') {
            this.pieChartType = 'pie';
            this.pieVisible = true;
        } else if (value === 'Doughnut') {
            this.doughnutChartType = 'doughnut';
            this.doughnutVisible = true;
        } else if (value === 'Radar') {
            this.radarChartType = 'radar';
            this.radarVisible = true;
        } else if (value === 'PolarArea') {
            this.polarAreaChartType = 'polarArea';
            this.polarVisible = true;
        } else if (value === 'Line') {
            this.lineChartType = 'line';
            this.lineVisible = true;
        } else if (value === 'Bar') {
            this.barChartType = 'bar';
            this.barChartLegend = true;
            this.barVisible = true;
        }

        this.open(content);
    }

    open(content) {
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }

    onSubmit() {
        alert(JSON.stringify(this.graficiForm.value));
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
