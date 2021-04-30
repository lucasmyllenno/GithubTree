export interface RepositoryModel {
    id: number;
    name: string;
    description: string;
    html_url: string;
    pushed_at: string;
    language: string;
    forks_count: number;
    watchers_count: number;
    stargazers_count: number;
    license: {
        key: string;
        name: string;
    };
}
