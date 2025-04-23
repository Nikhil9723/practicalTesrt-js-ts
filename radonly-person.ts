type ReadOnlyPerson<T> = {
   readonly [P in keyof T] : T[P];
}

interface Person {
  name: string;
  age: number;
}

const person: Person = { name: "Alice", age: 30 };
const readOnlyPerson: ReadOnlyPerson<Person> = person;

readOnlyPerson.age = 31; // Error