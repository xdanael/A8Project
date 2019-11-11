import {Component, OnInit, Input} from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import {WiserAPI} from '../../../class/WiserAPI';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
    @Input() model: WiserAPI;
    public pieChartLabels: string[] = [
        'Directors number',
        'Subsidiaries number',
        'Board Members',
        'Employees number'
    ];
    public pieChartData: number[] = [];
   // public pieChartType = 'pie';
    public pieChartType: string;
    closeResult: string;

    private directors: number;
    private subsidiaries: number;
    private members: number;
    private employees: number;

    ngOnInit() {
        console.log(this.model);
        this.pieChartType = 'pie';
        this.directors =  this.model.corporateGovernance === undefined ? 0 :  +this.model.corporateGovernance.noOfDirectors;
        this.subsidiaries =  this.model.corporateGovernance === undefined ? 0 : +this.model.corporateGovernance.noOfSubsidiaries;
        this.members = this.model.corporateGovernance === undefined ? 0 : +this.model.corporateGovernance.boardMembers;
        this.employees = this.model.corporateGovernance === undefined ? 0 : +this.model.corporateGovernance.numberofEmployees;
        this.pieChartData = [ this.directors, this.subsidiaries, this.members, this.employees];
    }

    constructor(private modalService: NgbModal) { }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
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
}
