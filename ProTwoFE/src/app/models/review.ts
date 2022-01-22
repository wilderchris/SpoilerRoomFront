import { Movie } from "./movie";
import { User } from "./user";

export class Review {
    constructor(
        public id:number = 0,
        public user:User,
        public movie:Movie,
        public reviewText:string,
        public reviewTitle:string,
        public reviewRating:number,
        public sentAt:number
    ) { }
}
