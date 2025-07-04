export interface User {
    login?: string;
    id?: number;
    node_id?: string;
    avatar_url?: string;
    gravatar_id?: string;
    url?: string;
    html_url?: string;
    followers_url?: string;
    following_url?: string;
    gists_url?: string;
    starred_url?: string;
    subscriptions_url?: string;
    organizations_url?: string;
    repos_url?: string;
    events_url?: string;
    received_events_url?: string;
    type?: string;
    user_view_type?: string;
    site_admin?: boolean;
    name?: string;
    company?: string | null;
    blog?: string;
    location?: string | null;
    email?: string | null;
    hireable?: boolean | null;
    bio?: string | null;
    twitter_username?: string | null;
    public_repos?: number;
    public_gists?: number;
    followers?: number;
    following?: number;
    created_at?: string;
    updated_at?: string;
}

export const currentUser = {
    login: "mehmetkahraman0",
    avatar_url: "https://avatars.githubusercontent.com/u/139287624?v=4",
    name: "Mehmet Kahraman",
} 