// class= members(variables/fields, constructor,methods)
// inheritance, access type(public [default],private,protected)

class Employee {
  eid: number;
  ename: string;
  esal: number;
  emobile: number | string; //mobile is either number or string

  constructor(
    eid: number,
    ename: string,
    esal: number,
    emobile: number | string
  ) {
    this.eid = eid;
    this.emobile = emobile;
    this.ename = ename;
    this.esal = esal;
  }

  // using this keyword is must to access fields in functions/constructors
  // internally it is public public and void return type
  printData() {
    let eid = 12;
    console.log(`Data is ${this.eid}, ${this.ename},${eid}`);
  }
}
let e1 = new Employee(101, "Nikhil", 300.0, 12345);
console.log(e1);
e1.printData();
