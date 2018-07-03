import {Component, ViewChild} from '@angular/core';
import {MatSidenav} from '@angular/material/sidenav';

/** @title Sidenav with custom escape and backdrop click behavior */
@Component({
    selector: 'sidenav-comp',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @ViewChild('sidenav') sidenav: MatSidenav;

    close() {
        this.sidenav.close();
    }
}