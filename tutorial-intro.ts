// Welcome to the TypeScript Playground, this is a website
// which gives you a chance to write, share and learn TypeScript.

// You could think of it in three ways:
//
//  - A location to learn TypeScript where nothing can break
//  - A place to experiment with TypeScript syntax, and share the URLs with others
//  - A sandbox to experiment with different compiler features of TypeScript

const anExampleVariable = "Hello World"
console.log(anExampleVariable)

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
const obj = { width: 10, height: 15 };
const area = obj.width * obj.height;

let a = (4);

/*
console.log(4 / []);

let x = 42;
if ("" == 0) {
  // It is! But why??
  console.log('"" == 0 ?!!?');
}
if (1 < x < 3) {
  // True for *any* value of x!
  console.log("1 < x < 3 is always true??!?");
}
*/

interface User {
    name: string;
    id: number;
}

const user: User = {
    name: "Hayes",
    id: 0,
};

console.log(user);

class UserAccount implements User {
    name: string;
    id: number;

    constructor(name: string, id: number) {
        this.name = name;
        this.id = id;
    }
}

const user_account: User = new UserAccount("Murphy", 1);

function getAdminUser(): User {
    return user_account;
}

console.log("Admin user is: " + getAdminUser().name);

type MyBool = true | false;
type WindowState = "open" | "closed" | "minimized";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

let toto: WindowState;
// toto = "yes";
toto = "closed";

console.log("Typeof function getAdminUser is: " + typeof getAdminUser);

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a
// constant called `backpack`, and to not worry about where it came from.
declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
backpack.add("toto");

const object = backpack.get();
console.log("object: " + object);

// Since the backpack variable is a string, you can't pass a number to the add function.
// backpack.add(23);
