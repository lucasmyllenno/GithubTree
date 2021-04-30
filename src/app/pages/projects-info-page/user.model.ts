export interface UserModel {
    id: number;
    login: string;
    avatar_url: string;
    name: string;
    company: string;
    blog: string;
    location: string;
    public_repos: number;
    public_gists: number;
    followers: number;
    following: number;
    created_at: Date;
}
