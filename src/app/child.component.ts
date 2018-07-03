import { Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<button mat-button [matMenuTriggerFor]="menu">Menu</button>
    <mat-menu #menu="matMenu">
        <button mat-menu-item>Item 1</button>
        <button mat-menu-item>Item 2</button>
    </mat-menu>`
})
export class ChildComponent {
    name= "Евгений";
}