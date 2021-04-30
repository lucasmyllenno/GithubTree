import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserModel } from '../pages/projects-info-page/user.model';
import { environment } from '../../environments/environment';
import { RepositoryModel } from '../modules/repositories-accordion/repository.model';
import { CommitModel } from '../modules/commits-timeline/commit.model';

@Injectable({
    providedIn: 'root'
})
export class GithubService {

    constructor(private http: HttpClient) {
    }

    public getUser(user: string): Observable<UserModel> {
        return this.http.get<UserModel>(`${environment.apiUrl}/users/${user}`);
    }

    public getRepositories(user: string): Observable<RepositoryModel[]> {
        return this.http.get<RepositoryModel[]>(`${environment.apiUrl}/users/${user}/repos`);
    }

    public getCommits(user: string, repositoryName: string): Observable<CommitModel[]> {
        return this.http.get<CommitModel[]>(`${environment.apiUrl}/repos/${user}/${repositoryName}/commits`);
    }
}
