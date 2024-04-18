export {}

const names = ["Max", "Manuel"];
const names2: Array<String> = []; // same as string[]

const promise: Promise<String> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is done");
    // resolve(10);
  }, 2000);
});

promise.then((data) => {
  data.split(" ");
});

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  // extends doesnt seem to do anything
  // return Object.assign(objA, objB);
  return { ...objA, ...objB };
}

// const mergedObj = merge({ name: "Name", hobbies: ["hobby1", "hobby2"] }, { age: 10 });
const mergedObj = merge({ name: "Name", hobbies: ["hobby1", "hobby2"] }, 10); // this is possible even with extends Object
console.log(mergedObj);

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value";
  if (element.length > 0) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there"));
console.log(countAndDescribe(["Hi there"]));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return obj[key];
}

console.log(extractAndConvert({ name: "max" }, "name"));

class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Name");
textStorage.addItem("Another name");

// const objStorage = new DataStorage<object>();
// objStorage.addItem({ id: "First" });
// objStorage.addItem({ id: "Second" });
// objStorage.addItem({ id: "Third" });
// objStorage.removeItem({ id: "Second" }); // This removes last element because the object points to different address than the original
// console.log(objStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let CourseGoal: Partial<CourseGoal> = {};
  CourseGoal.title = title;
  CourseGoal.description = description;
  CourseGoal.completeUntil = date;
  return CourseGoal as CourseGoal;
}

const readonlyNames: Readonly<string[]> = ["Max", "Anna"];
// readonlyNames.push('Manu'); 