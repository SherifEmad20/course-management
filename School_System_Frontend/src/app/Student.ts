import { Course } from "./Course";

export class Student {
    id!: number;
    studentName!: string;
    email!: string;
    password!: string;
    phoneNumber!: string;
    address!: string;

    //list of courses
    courses!: Course[];

}
