let message = "Hello users";

let n = "I  am the game!..";
console.log(message + n);

// ==================Datatypes================================//

let id: number = 10;
let sname: string = "nikhil";
let course: string = "java";
let isEnabled: boolean = false;
let data: number = 200.5;
let info = 10;
let info1;
console.log(id);
console.log(sname);
console.log(course);
console.log(isEnabled);
console.log(data);
console.log(info);
console.log(info1); //undefined

let model: string;
// model = info;

// ==================Operators================================//
let x = 10,
  y = 98;
console.log(`Data is ${x} and ${y}`);

let add = x + y;
console.log(add);

let exists = x < y && x++ <= 23;
console.log(exists);

let check = x < 0 ? "ok" : "not ok";
console.log(check);

// ==================Conditional================================//

let userid = 200;
if (userid > 12 && userid <= 200) {
  console.log("condition 1");
} else if (userid > 200) {
  console.log(`condition 2`);
} else {
  console.log(`nothing matched!..`);
}

let color = "red";
switch (color) {
  case `red`:
  case `none`:
    console.log(`good option`);
    break;

  case `blue`:
    console.log(`fine`);
  default:
    console.log(`choose 1 color`);
    break;
}

// ==================Loops================================//

for (let i = 0; i <= 100; i++) {
  console.log(i);
}

let arr: number[] = [20, 30, 40, 2324, 43, 123, 1];
for (let num of arr) {
  console.log(num);
}

let i = 0;
const max = 5;
while (i <= max) {
  console.log(i);
  i++;
}

let c = [213, "sdsd", 22];
for (let d of c) {
  console.log(d);
}

let v: any[] = [23123, `hfdshkjfh`, 123.009];
for (let y of v) {
  console.log(y);
}

// ==================Objects================================//

let employee: { id: number; name: string; salary: number; dept: string } = {
  id: 10,
  name: "nik",
  salary: 200.0,
  dept: "dev",
};

// or

let arre = {
  id: 1,
  name: "ansh",
};

console.log(employee.id);

// ==================Functions================================//

function add1(a, b) {
  console.log(a + b);
}

function message1(name: string): void {
  console.log("Hello: " + name);
}

function aisehi(x: number, y: number): number {
  return x + y;
}

// ==================Functions================================//

let addFunction = (x: number, y: number) => x + y;
addFunction(123, 444);

//z = default
function addA(x: number, y: number, z: number = 90) {
  return x + y + z;
}

//dept? is optional
function display(name: string, dept?: string) {
  if (dept != undefined) {
    console.log(name + " - " + dept);
  } else {
    console.log(name + " - Dev");
  }
}

display("ajay", "testing");
display("ajay");

let total = 0;
function positions(...ids: number[]) {
  ids.forEach((id) => (total = total + id));
}
positions(10, 20, 30, 40); // no need to pass array
console.log(total);
