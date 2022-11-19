// https://www.typescriptlang.org/docs/handbook/typescript-tooling-in-5-minutes.html

function greeter(person: string) {
    return "Hello, " + person;
}

let user = "Jane User";

document.body.textContent = greeter(user);
