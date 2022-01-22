export class Movie {
    constructor(
        public id:number = 0,
        public movieName:string,
        public movieYear:number,
        public description:string,
        public movieRating:string,
        public genre:string
    ) { }
}
