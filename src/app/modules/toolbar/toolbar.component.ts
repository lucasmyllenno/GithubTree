import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-toolbar',
    templateUrl: './toolbar.component.html',
    styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {

    @Input() userName: string | null | undefined;
    @Input() avatarUrl: string | null | undefined;

    constructor(private router: Router) {
    }

    public changeUser(): void {
        this.router.navigate(['search']);
    }
}
