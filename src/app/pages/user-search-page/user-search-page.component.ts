import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-search-page',
    templateUrl: './user-search-page.component.html',
    styleUrls: ['./user-search-page.component.scss']
})
export class UserSearchPageComponent {

    public usernameFormControl: FormControl;

    constructor(private githubService: GithubService,
                private router: Router) {
        this.usernameFormControl = new FormControl();
    }

    public selectUsername(): void {
        const username = this.usernameFormControl.value;
        if (username) {
            this.router.navigate([`projects/${username.toLowerCase()}`]);
        }
    }
}
