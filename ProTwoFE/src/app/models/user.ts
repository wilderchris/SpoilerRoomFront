
export class User {
    constructor(
        public id:number,
        public firstName:string,
        public lastName:string,
        public username:string,
        public passwrd:string,
        public role:number = 0
    ) { }
}
