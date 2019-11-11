import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UcfirstPipe } from './ucfirst.pipe';
import {TimingPipe} from "./timing.pipe";


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [UcfirstPipe, TimingPipe],
    exports: [UcfirstPipe, TimingPipe]
})
export class SharedPipesModule { }
