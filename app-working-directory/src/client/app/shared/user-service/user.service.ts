import { Injectable }                   from '@angular/core';
import { User, FridgeItem,
         ShoppingItem, ShoppingList }   from './user';
import { USER }                         from './mock-user';

@Injectable()
export class UserService {
    static user: User = USER;

    getUser():        User             { return UserService.user; }
    getHome():        ShoppingList[]   { return UserService.user.homeList; }
    getFridge():      FridgeItem[]     { return UserService.user.fridgeList; }
    getCurrentList(): ShoppingList     { return UserService.user.currentList; }

    setCurrentList(list: ShoppingList) {
        UserService.user.currentList = list;
    }
}