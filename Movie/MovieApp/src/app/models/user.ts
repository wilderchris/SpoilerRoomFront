
export class User {
    constructor(
        public id:number = 0,
        public firstName:string,
        public lastName:string,
        public username:string,
        public passwd:string,
        public role:number = 3
    ) { }
}
