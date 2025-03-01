"use strict";
class Person {
    constructor(name, age, userId) {
        this.name = name;
        this.age = age;
        this.userId = userId;
    }
    details() {
        console.log(`Name: ${this.name}, Age: ${this.age}, ID: ${this.userId}`);
    }
}
class Moderator extends Person {
    constructor(name, age, userId) {
        super(name, age, userId);
    }
    removeUser() {
        console.log(`${this.name} delete`);
    }
    addUser() {
        console.log(`${this.name} add`);
    }
}
class SuperUser extends Person {
    constructor(name, age, userId) {
        super(name, age, userId);
    }
    promoteModerator(moderator) {
        console.log(`${this.name} ${moderator.name} ning huquqlarini kengaytirdi`);
    }
}
class AI extends Person {
    constructor(name, age, userId) {
        super(name, age, userId);
    }
}
const mainUser = new SuperUser("Alex", 77, 7777);
mainUser.details();
const mod1 = new Moderator("Jake", 16, 21450);
mod1.details();
mod1.addUser();
mod1.removeUser();
mainUser.promoteModerator(mod1);
const aiBot = new AI("HelperBot", 5, 303);
aiBot.details();
console.log(mainUser);
console.log(mod1);
console.log(aiBot);
