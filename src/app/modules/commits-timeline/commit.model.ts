export interface CommitModel {
    commit: {
        author: {
            name: string;
            email: string;
            date: string;
        };
        message: string;
    };
    author: {
        login: string;
        id: number;
        avatar_url: string;
    };
    html_url: string;
}
