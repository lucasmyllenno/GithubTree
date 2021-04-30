import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from './user.model';
import { GithubService } from '../../services/github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-projects-info-page',
    templateUrl: './projects-info-page.component.html',
    styleUrls: ['./projects-info-page.component.scss']
})
export class ProjectsInfoPageComponent implements OnInit {

    public user: BehaviorSubject<UserModel | null | undefined>;
    public selectedRepository: BehaviorSubject<string | null | undefined>;

    constructor(private activatedRoute: ActivatedRoute,
                private githubService: GithubService,
                private router: Router) {
        this.user = new BehaviorSubject<UserModel | null | undefined>(null);
        this.selectedRepository = new BehaviorSubject<string | null | undefined>('');
    }

    ngOnInit(): void {
        this.activatedRoute.paramMap.subscribe(params => {
            const username = params.get('username') as string;
            if (username) {
                this.syncUser(username);
            }
        });
    }

    public selectRepository(repository: string | undefined | null): void {
        this.selectedRepository.next(repository);
    }

    private syncUser(username: string): void {
        this.githubService.getUser(username).subscribe(
            (user) => {
                this.user.next(user);
            }, error => {
                this.router.navigate(['search']);
            }
        );
    }
}
