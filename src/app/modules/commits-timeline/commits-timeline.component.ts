import { Component, Input, OnChanges } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CommitModel } from './commit.model';
import { GithubService } from '../../services/github.service';
import { ModulesService } from '../modules.service';

@Component({
    selector: 'app-commits-timeline',
    templateUrl: './commits-timeline.component.html',
    styleUrls: ['./commits-timeline.component.scss']
})
export class CommitsTimelineComponent implements OnChanges {

    @Input() username: string | null | undefined;
    @Input() repository: string | null | undefined;

    public commits = new BehaviorSubject<CommitModel[] | undefined>([]);

    constructor(private githubService: GithubService,
                public service: ModulesService) {
        this.commits = new BehaviorSubject<CommitModel[] | undefined>([]);
    }

    ngOnChanges(): void {
        if (this.username && this.repository) {
            this.githubService.getCommits(this.username, this.repository).subscribe(
                (commit) => {
                    this.commits.next(commit);
                }
            );
        }
    }

    public userImage(commit: CommitModel): string {
        const avatarUrl = commit?.author?.avatar_url;
        return avatarUrl ? avatarUrl : '../../../assets/images/user-image.png';
    }
}
