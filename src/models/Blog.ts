import { Post } from "./Posts";

export class Blog {
    id: number;
    title: string;
    created: Date;
    userId: number;
    posts: Post[];
}