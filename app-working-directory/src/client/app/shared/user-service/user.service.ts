import { Injectable }   from '@angular/core';
import { User }         from './user';
import { USER }         from './mock-user';

@Injectable()
export class UserService {
    static user: User = USER;

    getUser(): User {
        return UserService.user;
    }

    getFridge(): void {} //stub
    getList(): void {} //stub
    getHome(): void {} // stub

    getTest(): string { return "Hellooooooo" }
}