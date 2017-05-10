import { User } from './user';

export const USER: User = {
    username:    "Raly",
    email:       "me@somewhere.com",

    homeList: [
        {
            name: "Raly's BBQ",
            contents: [ "Ribs", "Cola", "Oranges" ]
        },
        {
            name: "Kevin Chow Cola",
            contents: [ "Cane Sugar", "Secret Sauce", "Bubbles" ]
        }
    ],
    currentList: this.homeList[0],
    fridgeList: [ "Beans", "Soup", "Stuff" ]

}