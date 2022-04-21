// class= members(variables/fields, constructor,methods)
// inheritance, access type(public [default],private,protected)
var Employee = /** @class */ (function () {
    function Employee(eid, ename, esal, emobile) {
        this.eid = eid;
        this.emobile = emobile;
        this.ename = ename;
        this.esal = esal;
    }
    // using this keyword is must to access fields in functions/constructors
    // internally it is public public and void return type
    Employee.prototype.printData = function () {
        var eid = 12;
        console.log("Data is " + this.eid + ", " + this.ename + "," + eid);
    };
    return Employee;
}());
var e1 = new Employee(101, "Nikhil", 300.0, 12345);
console.log(e1);
e1.printData();
