import { Course } from './../../courses/entities/course.entity';
export declare class Bootcamp {
    id: number;
    name: string;
    phone: string;
    address: string;
    topics: string;
    averageRating: number;
    createAt: Date;
    courses: Course[];
}
