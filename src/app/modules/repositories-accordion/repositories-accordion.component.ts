import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { RepositoryModel } from './repository.model';
import { GithubService } from '../../services/github.service';
import { ModulesService } from '../modules.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
    selector: 'app-repositories-accordion',
    templateUrl: './repositories-accordion.component.html',
    styleUrls: ['./repositories-accordion.component.scss']
})
export class RepositoriesAccordionComponent implements OnChanges, OnDestroy {

    @Input() username: string | null | undefined;
    @Output() selectRepositoryEvent = new EventEmitter<string | undefined | null>();

    public repositories: RepositoryModel[];
    public filteredRepositories: BehaviorSubject<RepositoryModel[] | undefined>;
    public selectedRepository: RepositoryModel | null;
    public searchSubscription: Subscription | null;
    public searchFormControl: FormControl;

    constructor(private githubService: GithubService,
                public service: ModulesService) {
        this.repositories = [];
        this.filteredRepositories = new BehaviorSubject<RepositoryModel[] | undefined>([]);
        this.selectedRepository = null;
        this.searchSubscription = null;
        this.searchFormControl = new FormControl();
        this.startRepositoriesFilter();
    }

    ngOnChanges(): void {
        if (this.username) {
            this.githubService.getRepositories(this.username).subscribe(
                (repositories) => {
                    this.repositories = this.sortRepositories(repositories);
                    this.filteredRepositories.next(this.repositories);
                    if (repositories.length > 0) {
                        this.selectRepository(repositories[0]);
                    }
                }
            );
        }
    }

    ngOnDestroy(): void {
        if (this.searchSubscription) {
            this.searchSubscription.unsubscribe();
        }
    }

    public sortRepositories(repositories: RepositoryModel[]): RepositoryModel[] {
        return repositories.sort((a, b) =>
            new Date(a.pushed_at).valueOf() > new Date(b.pushed_at).valueOf() ? -1 : 1
        );
    }

    public startRepositoriesFilter(): void {
        this.searchSubscription = this.searchFormControl.valueChanges.pipe(
            distinctUntilChanged(),
            debounceTime(150)
        ).subscribe((term: any) => {
            const emptyTerm = term === '' || term === null || term === undefined;
            const noRepositories = this.repositories.length === 0;
            const isSelectedRepository = term?.id !== undefined;

            if (emptyTerm) {
                this.filteredRepositories.next(this.repositories);
            } else if (!emptyTerm && !noRepositories) {
                if (isSelectedRepository) {
                    term = term?.name?.trim().toLowerCase();
                } else {
                    term = term?.trim().toLowerCase();
                }
                const filtered = this.repositories.filter(
                    repository => repository.name.trim().toLowerCase().includes(term)
                );
                this.filteredRepositories.next(filtered);
            }
        });
    }

    public isSelectedRepository(repository: RepositoryModel): boolean {
        return this.selectedRepository?.id === repository.id;
    }

    public selectRepository(repository: RepositoryModel): void {
        const isDifferentRepository = !this.selectedRepository || this.selectedRepository.id !== repository.id;
        if (isDifferentRepository) {
            this.selectedRepository = repository;
            this.selectRepositoryEvent.emit(repository.name);
        }
    }

    public selectRepositoryBySearch(value: any): void {
        const repository = value?.option?.value as RepositoryModel;
        this.selectRepository(repository);
    }

    public repositoryNameDisplayFn(repository: RepositoryModel): string {
        return repository ? repository.name : '';
    }

    public repositoryLanguageDisplayFn(repository: RepositoryModel): string {
        return repository ? repository.language : '';
    }
}
