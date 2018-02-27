import { Subject } from "rxjs/Subject";

export class UsersService {
    userActivated = new Subject(); //a subject is an observable and observer (better than using and emitter)
}