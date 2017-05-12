"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FridgeItem = (function () {
    function FridgeItem(name, quantity, expiration) {
        this.name = name;
        this.quantity = quantity;
        this.expiration = expiration;
        this.maxAge = 100;
    }
    return FridgeItem;
}());
exports.FridgeItem = FridgeItem;
var ShoppingItem = (function () {
    function ShoppingItem(name, quantity, checked) {
        this.name = name;
        this.quantity = quantity;
        this.checked = checked;
    }
    return ShoppingItem;
}());
exports.ShoppingItem = ShoppingItem;
var ShoppingList = (function () {
    function ShoppingList(name) {
        this.contents = [];
        this.name = name;
    }
    return ShoppingList;
}());
exports.ShoppingList = ShoppingList;
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zaGFyZWQvdXNlci1zZXJ2aWNlL3VzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQTtJQU1JLG9CQUFZLElBQVksRUFBRSxRQUFnQixFQUFFLFVBQWtCO1FBQzVELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO0lBQ3BCLENBQUM7SUFFTCxpQkFBQztBQUFELENBYkEsQUFhQyxJQUFBO0FBYlksZ0NBQVU7QUFldkI7SUFLSSxzQkFBWSxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxPQUFnQjtRQUN4RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUMzQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQVZBLEFBVUMsSUFBQTtBQVZZLG9DQUFZO0FBYXpCO0lBSUksc0JBQVksSUFBWTtRQUZ4QixhQUFRLEdBQXNCLEVBQUUsQ0FBQztRQUc3QixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQVBBLEFBT0MsSUFBQTtBQVBZLG9DQUFZO0FBVXpCO0lBQUE7SUFRQSxDQUFDO0lBQUQsV0FBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksb0JBQUkiLCJmaWxlIjoiYXBwL3NoYXJlZC91c2VyLXNlcnZpY2UvdXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExJU1RTXG4vLyBUaGlzIHNlY3Rpb24gY29udGFpbnMgY2xhc3NlcyBmb3IgYWxsIHRoZSBkaWZmZXJlbnQgdHlwZXMgb2YgbGlzdHMuXG5leHBvcnQgY2xhc3MgRnJpZGdlSXRlbSAge1xuICAgIG5hbWU6ICAgICAgIHN0cmluZztcbiAgICBxdWFudGl0eTogICBudW1iZXI7XG4gICAgZXhwaXJhdGlvbjogbnVtYmVyO1xuICAgIG1heEFnZTogICAgIG51bWJlcjtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZywgcXVhbnRpdHk6IG51bWJlciwgZXhwaXJhdGlvbjogbnVtYmVyKSB7XG4gICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgdGhpcy5leHBpcmF0aW9uID0gZXhwaXJhdGlvbjtcbiAgICAgIHRoaXMubWF4QWdlID0gMTAwO1xuICAgIH1cblxufVxuXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdJdGVtIHtcbiAgICBuYW1lOiAgICAgICAgc3RyaW5nO1xuICAgIHF1YW50aXR5OiAgICBudW1iZXI7XG4gICAgY2hlY2tlZDogICAgIGJvb2xlYW47XG5cbiAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHF1YW50aXR5OiBudW1iZXIsIGNoZWNrZWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xuICAgICAgICB0aGlzLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgIH1cbn1cblxuLy8gU0hPUFBJTkcgTElTVCBDTEFTU1xuZXhwb3J0IGNsYXNzIFNob3BwaW5nTGlzdCB7XG4gICAgbmFtZTogICAgICAgIHN0cmluZztcbiAgICBjb250ZW50czogICAgU2hvcHBpbmdJdGVtW10gPSBbXTtcblxuICAgIGNvbnN0cnVjdG9yKG5hbWU6IHN0cmluZykge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIH1cbn1cblxuLy8gVVNFUiBDTEFTU1xuZXhwb3J0IGNsYXNzIFVzZXIge1xuICAgIHVzZXJuYW1lOiAgICBzdHJpbmc7XG4gICAgZW1haWw6ICAgICAgIHN0cmluZztcbiAgICBwYXNzd29yZDogICAgc3RyaW5nO1xuICAgIFxuICAgIGN1cnJlbnRMaXN0OiBTaG9wcGluZ0xpc3Q7XG4gICAgaG9tZUxpc3Q6ICAgIFNob3BwaW5nTGlzdFtdO1xuICAgIGZyaWRnZUxpc3Q6ICBGcmlkZ2VJdGVtW107XG59XG4iXX0=
