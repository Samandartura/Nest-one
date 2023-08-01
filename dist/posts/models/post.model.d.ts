import { Model } from 'sequelize-typescript';
import { User } from 'src/users/models/user.model';
interface PostCreationAttribute {
    title: string;
    content: string;
    image: string;
    userId: number;
}
export declare class Post extends Model<Post, PostCreationAttribute> {
    id: number;
    title: string;
    content: string;
    image: string;
    userId: number;
    author: User;
}
export {};
