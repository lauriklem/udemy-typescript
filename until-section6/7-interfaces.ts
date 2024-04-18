export {}
//type AddFn = (a: number, b: number) => number;
interface AddFn {
  (a: number, b:number): number;
}

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
}

interface Named {
  readonly name?: string;
  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  constructor(public name?: string) {}

  greet(phrase: string) {
    if (this.name) {
      console.log(phrase + " " + this.name);
    } else {
      console.log(phrase);
    }
  }
}

let user1: Greetable; // can also be Person

user1 = new Person('Lauri');

user1.greet("Hi there");
console.log(user1);

let user2 = new Person();
console.log(user2);