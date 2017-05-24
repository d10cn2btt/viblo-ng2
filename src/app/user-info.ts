export class User {
    listType = ['Admin', 'Mod', 'Member'];

    constructor(
        public fullname?: string,
        public age?: number,
        public level?: string,
    ) {
    }
}