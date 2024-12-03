import { Bootcamp } from 'src/bootcamps/entities/bootcamp.entity';
import { minimumSkil } from './../enum/minimum.skill.enum';
export declare class Course {
    id: number;
    title: string;
    description: string;
    weeks: number;
    tution: number;
    minimumSkil: minimumSkil;
    createAt: Date;
    bootcamp: Bootcamp;
}
