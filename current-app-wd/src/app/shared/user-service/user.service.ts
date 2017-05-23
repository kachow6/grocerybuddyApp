import { Injectable                 }   from '@angular/core';
import { User, FridgeItem,
         ShoppingItem, 
         ShoppingList               }   from './user';
import { USER                       }   from './mock-user';
import { AngularFireDatabase,
         FirebaseListObservable,
         FirebaseObjectObservable   }   from 'angularfire2/database';
import { Observable                 }   from 'rxjs/Observable';
import { AngularFireAuth            }   from 'angularfire2/auth';
import * as firebase                    from 'firebase/app';

@Injectable()
export class UserService {
    static user: User = USER;
    static auth: boolean = true;

    getUser():        User             { return UserService.user; }
    getHome():        ShoppingList[]   { return UserService.user.homeList; }
    getFridge():      FridgeItem[]     { return UserService.user.fridgeList; }
    getCurrentList(): string           { return UserService.user.currentList; }

    getAuth():        boolean          { return UserService.auth; }

    setHome(list: ShoppingList[]): void {
        UserService.user.homeList = list;
    }

    setFridge(list: FridgeItem[]): void {
        UserService.user.fridgeList = list;
    }
    
    setCurrentList(listKey: string) {
        UserService.user.currentList = listKey;
    }

    static makePresentable(str: string): string {
        return str.slice(0,1).toUpperCase().concat(str.slice(1).toLowerCase());
    }

    static makeSearchable(str: string): string {
        str = str.toLowerCase();

        if (str.slice(str.length-1) == 's') {
            str = str.slice(0, str.length-1);
        }

        return str;
    }
}
