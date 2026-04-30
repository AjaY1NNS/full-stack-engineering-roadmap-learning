// Intermediate

//1. Generics
// Generics allow you to create reusable components that can work with any data type. You can define a generic type using angle brackets (<>) and specify the type parameter.
function identity<T>(arg: T): T {
    return arg;
}
let output1 = identity<string>("Hello, Generics!");
let output2 = identity<number>(42);

// 2. Union Types (Partial,Pick, Omit, Exclude, Extract, Record etc.)
// TypeScript provides several utility types that can be used to manipulate and transform types. Some of the most commonly used utility types include Partial, Pick, Omit, Exclude, Extract, and Record.
interface User {
    id: string;
    name: string;
    age: number;
    email: string;
}

type PartialUser = Partial<User>; // All properties are optional
type PickedUser = Pick<User, "id" | "name">; // Only 'id' and 'name' properties are included
type OmittedUser = Omit<User, "email">; // All properties except 'email' are included
type ExcludedUser = Exclude<keyof User, "email">; // Excludes 'email' from the keys of User
type ExtractedUser = Extract<keyof User, "id" | "name">; // Extracts 'id' and 'name' from the keys of User
type UserRecord = Record<string, User>; // Creates a type with string keys and User values  

// 3. Modules (import/export)
// TypeScript supports modules, which allow you to organize your code into separate files and import/export functionality between them. You can use the 'import' and 'export' keywords to manage modules.
// In file mathUtils.ts
export function add(a: number, b: number): number {
    return a + b;
}
// In file main.ts
// import { add } from "./mathUtils";
let sum = add(5, 10);

// what is the difference between export default and export in TypeScript?
// In TypeScript, 'export' and 'export default' are used to export modules, but they serve different purposes:
// - 'export' is used to export multiple functions, classes, or variables from a file
// - 'export default' is used to export a single default function, class, or variable from a file

// 4. Classes (OOP in TypeScript)
// TypeScript supports object-oriented programming (OOP) concepts such as classes, inheritance, and interfaces. You can define a class using the 'class' keyword and create instances of the class using the 'new' keyword.
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}
let person1 = new Person("Alice", 30);

// Class and OOP concepts in TypeScript include:
// - Inheritance: Classes can inherit properties and methods from other classes using the 'extends' keyword.
// - Interfaces: Classes can implement interfaces to ensure they adhere to a specific structure.
// - Access Modifiers: TypeScript provides access modifiers (public, private, protected) to control the visibility of class members.
// - Static Members: Classes can have static properties and methods that belong to the class itself rather than instances of the class.

// Constructors : A constructor is a special method in a class that is called when an instance of the class is created. It is used to initialize the properties of the class. In TypeScript, you can define a constructor using the 'constructor' keyword. The constructor can take parameters to initialize the properties of the class when an instance is created. For example:
// Prototypes : In TypeScript, prototypes are used to define methods and properties that can be shared across all instances of a class. When you create a class in TypeScript, it automatically creates a prototype for that class. You can add methods and properties to the prototype, and they will be available to all instances of the class. For example:
// Instance : (new, this)

// 4 Pillars of OOP (Object-Oriented Programming)

// 1. Abstraction — hide implementation details, expose only what's needed
abstract class Vehicle {
    abstract getFuelType(): string;
    move(): void {
        console.log(`Moving using ${this.getFuelType()}`);
    }
}

// 2. Encapsulation — bundle data and methods, restrict direct access to internal state
class BankAccount {
    public owner: string;
    private balance: number;         // only accessible inside this class
    protected accountType: string;   // accessible here and in subclasses

    constructor(owner: string, balance: number, accountType: string) {
        this.owner = owner;
        this.balance = balance;
        this.accountType = accountType;
    }

    public deposit(amount: number): void {
        if (amount > 0) this.balance += amount;
    }

    public getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount("Alice", 1000, "Checking");
account.deposit(500);
console.log(account.getBalance()); // 1500
// account.balance; // Error: Property 'balance' is private

// 3. Inheritance — a class can extend another, reusing and specialising its behaviour
class SavingsAccount extends BankAccount {
    private interestRate: number;

    constructor(owner: string, balance: number, interestRate: number) {
        super(owner, balance, "Savings");
        this.interestRate = interestRate;
    }

    applyInterest(): void {
        // Can access protected 'accountType' from parent, but NOT private 'balance'
        console.log(`Applying interest to ${this.accountType} account for ${this.owner}`);
        this.deposit(this.getBalance() * this.interestRate);
    }
}

const savings = new SavingsAccount("Bob", 2000, 0.05);
savings.applyInterest();
console.log(savings.getBalance()); // 2100

// 4. Polymorphism — one interface, multiple implementations
class ElectricCar extends Vehicle {
    getFuelType(): string { return "electricity"; }
}
class PetrolCar extends Vehicle {
    getFuelType(): string { return "petrol"; }
}

const vehicles: Vehicle[] = [new ElectricCar(), new PetrolCar()];
vehicles.forEach(v => v.move());
// Moving using electricity
// Moving using petrol


// 5. Access modifiers (public, private, protected)
// - public    : accessible from anywhere (default)
// - private   : accessible only within the class that declares it
// - protected : accessible within the class and any subclass
// - readonly  : can be set only in the constructor, not mutated afterwards
class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    readonly id: number;

    constructor(id: number, name: string, salary: number, department: string) {
        this.id = id;
        this.name = name;
        this.salary = salary;
        this.department = department;
    }

    public getSalary(): number { return this.salary; }
}

class Manager extends Employee {
    private reports: Employee[];

    constructor(id: number, name: string, salary: number) {
        super(id, name, salary, "Management");
        this.reports = [];
    }

    addReport(emp: Employee): void {
        // Can access protected 'department' from parent
        console.log(`${emp.name} reports to ${this.name} in ${this.department}`);
        this.reports.push(emp);
    }
}

const emp = new Employee(1, "Carol", 50000, "Engineering");
const mgr = new Manager(2, "Dave", 80000);
mgr.addReport(emp);
// emp.id = 99; // Error: Cannot assign to 'id' because it is a read-only property


// 6. Abstract classes
// An abstract class cannot be instantiated directly. It defines a contract that
// subclasses MUST fulfil by implementing every abstract method.
abstract class Shape {
    abstract getArea(): number;
    abstract getPerimeter(): number;

    describe(): string {
        return `Area: ${this.getArea().toFixed(2)}, Perimeter: ${this.getPerimeter().toFixed(2)}`;
    }
}

class Circle extends Shape {
    constructor(private radius: number) { super(); }
    getArea(): number { return Math.PI * this.radius ** 2; }
    getPerimeter(): number { return 2 * Math.PI * this.radius; }
}

class Rectangle extends Shape {
    constructor(private width: number, private height: number) { super(); }
    getArea(): number { return this.width * this.height; }
    getPerimeter(): number { return 2 * (this.width + this.height); }
}

// const s = new Shape(); // Error: Cannot create an instance of an abstract class
const shapes: Shape[] = [new Circle(5), new Rectangle(4, 6)];
shapes.forEach(s => console.log(s.describe()));
// Area: 78.54, Perimeter: 31.42
// Area: 24.00, Perimeter: 20.00


// 7. Generics with constraints
// You can restrict what types a generic accepts using 'extends'.
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: "Eve", email: "eve@example.com" };
console.log(getProperty(user, "name"));  // "Eve"
// getProperty(user, "phone"); // Error: Argument of type '"phone"' is not assignable

// Generic interfaces and classes
interface Repository<T> {
    findById(id: number): T | undefined;
    save(entity: T): void;
}

class UserRepository implements Repository<User> {
    private store: User[] = [];
    findById(id: number): User | undefined {
        return this.store.find(u => u.id === String(id));
    }
    save(entity: User): void {
        this.store.push(entity);
    }
}

const repo = new UserRepository();
repo.save({ id: "1", name: "Eve", age: 28, email: "eve@example.com" });
console.log(repo.findById(1)); // { id: '1', name: 'Eve', age: 28, email: 'eve@example.com' }


// 8. Static members
// Static properties and methods belong to the class itself, not to instances.
class MathHelper {
    static readonly PI = 3.14159;

    static circleArea(radius: number): number {
        return MathHelper.PI * radius ** 2;
    }
}

console.log(MathHelper.PI);               // 3.14159
console.log(MathHelper.circleArea(3));    // 28.27...
